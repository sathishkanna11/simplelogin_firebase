import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA40u8_kT1tit8hp8Dzps6llasOpfJr2gI",
    authDomain: "loginproject-8caf8.firebaseapp.com",
    databaseURL: "https://loginproject-8caf8.firebaseio.com",
    projectId: "loginproject-8caf8",
    storageBucket: "",
    messagingSenderId: "475062532458",
    appId: "1:475062532458:web:70bb6b869bbf63b9"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;