import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCI-rgJImkB2J2PzMc3ePj5YmUdWwxW30c",
  authDomain: "cooking-ninja-site-bc29d.firebaseapp.com",
  projectId: "cooking-ninja-site-bc29d",
  storageBucket: "cooking-ninja-site-bc29d.appspot.com",
  messagingSenderId: "29064214353",
  appId: "1:29064214353:web:f8c4ff632abd466f1c8570"
};


// initialize firebase
firebase.initializeApp(firebaseConfig)

// inti services
const projectFirestore = firebase.firestore()

export { projectFirestore }
