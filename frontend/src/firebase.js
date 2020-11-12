import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyATKMaJ3ZrQxs7HWPifCGkBro3CkbYs31c",
    authDomain: "messenger-clone-9e696.firebaseapp.com",
    databaseURL: "https://messenger-clone-9e696.firebaseio.com",
    projectId: "messenger-clone-9e696",
    storageBucket: "messenger-clone-9e696.appspot.com",
    messagingSenderId: "774111475999",
    appId: "1:774111475999:web:2b05b02b8c60bc7b4f182a",
    measurementId: "G-S1FRR668JC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db