import firebase from 'firebase/compat';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC9qceSOJ3J6BKzhQzvXcmGe6-9IHwm-bg",
    authDomain: "hostelapp-10fe7.firebaseapp.com",
    projectId: "hostelapp-10fe7",
    storageBucket: "hostelapp-10fe7.appspot.com",
    messagingSenderId: "294220959277",
    appId: "1:294220959277:web:8496ad65c25be1d352b2a4",
    measurementId: "G-FYRM37K7FG"
};

let app;
if (firebase.apps.length===0) {
    app=firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app();
  }
  
  const auth = firebase.auth();
  const db = firebase.firestore();

export { auth ,db};
 export default firebase;