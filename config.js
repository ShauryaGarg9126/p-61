import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCWCIsKodqdRCuX03b_Qg8KUaU2UakfuKQ",
    authDomain: "p-61-dba08.firebaseapp.com",
    databaseURL: "https://p-61-dba08-default-rtdb.firebaseio.com",
    projectId: "p-61-dba08",
    storageBucket: "p-61-dba08.appspot.com",
    messagingSenderId: "505388959378",
    appId: "1:505388959378:web:f33817d82393f8e3afc84b"
  };
  
  firebase.initializeApp(firebaseConfig);


export default firebase.database();