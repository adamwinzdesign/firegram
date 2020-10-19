import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
 
// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBcVed_6-qeu-TukMVQxc2R0Zmku9jxmjw",
  authDomain: "firegram-clone-sample.firebaseapp.com",
  databaseURL: "https://firegram-clone-sample.firebaseio.com",
  projectId: "firegram-clone-sample",
  storageBucket: "firegram-clone-sample.appspot.com",
  messagingSenderId: "180550378695",
  appId: "1:180550378695:web:/00349ab715115649f50ae2"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
