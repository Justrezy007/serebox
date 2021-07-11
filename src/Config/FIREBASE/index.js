import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDxN5i2RMXBJTQkjEs-LRfJl82hNnCa5Ro',
  authDomain: 'serepbox.firebaseapp.com',
  databaseURL: 'https://serepbox-default-rtdb.firebaseio.com',
  projectId: 'serepbox',
  storageBucket: 'serepbox.appspot.com',
  messagingSenderId: '838726893959',
  appId: '1:838726893959:web:6f6dbd6497107d6be6d322',
  measurementId: 'G-PSX9EBFH2C',
});

const FIREBASE = firebase;

export default FIREBASE;
