import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAgRCX4jeA5hSW9Hvh5r07ulLo_UvShpQI',
  authDomain: 'jersipedia-b1c27.firebaseapp.com',
  databaseURL:
    'https://jersipedia-b1c27-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'jersipedia-b1c27',
  storageBucket: 'jersipedia-b1c27.appspot.com',
  messagingSenderId: '442289222189',
  appId: '1:442289222189:web:e4c6b6499ec69f2d133ea4',

  // apiKey: "",
  // authDomain: "",
  // databaseURL: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: "",
});

const FIREBASE = firebase;

export default FIREBASE;
