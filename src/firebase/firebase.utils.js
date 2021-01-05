import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDo3YayLOR5nDShXNbV5Jw39goQr2zEor4",
  authDomain: "crown-db-ebd4a.firebaseapp.com",
  databaseURL: "https://crown-db-ebd4a-default-rtdb.firebaseio.com",
  projectId: "crown-db-ebd4a",
  storageBucket: "crown-db-ebd4a.appspot.com",
  messagingSenderId: "987635503529",
  appId: "1:987635503529:web:fdbde15edb9fd5dc8db4b8",
};

// Initialize Firebase
firebase.initializeApp(config);

// export auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// creates a user profile document in the firestore using the UID provided by google auth.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log(userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  // console.log(userRef);
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
const customParams = {
  prompt: "select_account",
};
provider.setCustomParameters(customParams);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
