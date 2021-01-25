 import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyBLFKdSgHADA0_ICJEOD8p1UFNMnIhv5I0",
    authDomain: "twf-authentication.firebaseapp.com",
    projectId: "twf-authentication",
    storageBucket: "twf-authentication.appspot.com",
    messagingSenderId: "50465725444",
    appId: "1:50465725444:web:b8bc3662559de753e02951"
  };
 
 const fire =  firebase.initializeApp(firebaseConfig);
 
 export default fire;