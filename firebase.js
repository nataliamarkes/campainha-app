import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEdzrMISBy7YqLKw-JFyYW-0fdPoIBr0c",
    authDomain: "smartbell-1ef3d.firebaseapp.com",
    databaseURL: "https://smartbell-1ef3d.firebaseio.com",
    projectId: "smartbell-1ef3d",
    storageBucket: "smartbell-1ef3d.appspot.com",
    messagingSenderId: "580342907030",
    appId: "1:580342907030:web:3696049cdb74a49d"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);