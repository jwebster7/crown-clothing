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
  appId: "1:987635503529:web:fdbde15edb9fd5dc8db4b8"
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
  // document references are used for executing CRUD operations via their methods.
  //  CRUD:   create  retrieve  update    delete
  //  Method: set()   get()     update()  delete()
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection("users");

  // when .get() is called on a reference obj, it returns a snapShot.
  // reference objects may be document or collection references.
  // in this case, a snapShot of a documentRef known as a documentSnapshot is returned from get().
  const snapShot = await userRef.get();
  const collectionSnapShot = await collectionRef.get();

  // console.log(snapShot.data());
  // collectionSnapShot.forEach((document) => console.log(document.data()));

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const collectionMap = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items
    };
  });

  return collectionMap.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

};

const provider = new firebase.auth.GoogleAuthProvider();
const customParams = {
  prompt: "select_account"
};
provider.setCustomParameters(customParams);
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
