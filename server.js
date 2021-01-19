const express = require("express"); // similar to import statement
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000; // if PORT is defined in .env use that, otherwise 5000

app.use(bodyParser.json()); // any responses from http requests will be in JSON format.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // allows the server to accept requests from other origins (ex. from port 3000)

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  // allows the BE app to serve static files from the client build directory
  app.use(express.static(path.join(__dirname, "client/build")));

  // app.get() defines what happens when the server receives HTTP GET requests
  // '*' = from any URL
  app.get("*", function (req, res) {
    // sends the index.html (which is static) that includes the whole client app code.
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// the app continuously listens for http requests on the defined port
app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port: " + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeError, stripeRes) => {
    if (stripeError) {
      res.status(500).send({ error: stripeError });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
