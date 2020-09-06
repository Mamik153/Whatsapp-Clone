import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDRsMmrDBdzgdO1e71iNE8Dk3XO1rHpzTM",
    authDomain: "whatsapp-clone-e455a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e455a.firebaseio.com",
    projectId: "whatsapp-clone-e455a",
    storageBucket: "whatsapp-clone-e455a.appspot.com",
    messagingSenderId: "688955359226",
    appId: "1:688955359226:web:6b90a4be739da27dd4ee43",
    measurementId: "G-ZVCNTZSL2X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;