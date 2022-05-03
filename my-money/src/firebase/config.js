import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCe5CCRd9LfNSYZRT4naj92vVHat8MksLc",
  authDomain: "mymoney-54fb9.firebaseapp.com",
  projectId: "mymoney-54fb9",
  storageBucket: "mymoney-54fb9.appspot.com",
  messagingSenderId: "807386937636",
  appId: "1:807386937636:web:340baffc115d0eda6a1bb1"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
