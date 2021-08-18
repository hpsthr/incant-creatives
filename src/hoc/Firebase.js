import firebase from "firebase";


const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBHlOqDVZWmGKrRNWAw2pD1qgQhguX4KgI",
        authDomain: "incant-creatives.firebaseapp.com",
        databaseURL: "https://incant-creatives-default-rtdb.firebaseio.com",
        projectId: "incant-creatives",
        storageBucket: "incant-creatives.appspot.com",
        messagingSenderId: "155468463352",
        appId: "1:155468463352:web:4af55ca540dc4c16224f0d",
        measurementId: "G-NTL7YWTZJ4"
      }
)

const DB = firebaseApp.firestore()

export {DB, firebaseApp}