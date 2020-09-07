import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBKuxFTG8WPjJlV7G3Og84XI6oDWtnMhFs",
  authDomain: "def-hacks-learn.firebaseapp.com",
  databaseURL: "https://def-hacks-learn.firebaseio.com",
  projectId: "def-hacks-learn",
  storageBucket: "def-hacks-learn.appspot.com",
  messagingSenderId: "273662385914",
  appId: "1:273662385914:web:3b894c7384f63748853343",
  measurementId: "G-0M7KCLDBY6"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;
