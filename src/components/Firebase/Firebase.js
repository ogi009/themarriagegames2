import app from "firebase/app"
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAqY1aj0YOPi100BDaoPTPTp33hyHbn7W4",
    authDomain: "the-marriage-games.firebaseapp.com",
    databaseURL: "https://the-marriage-games.firebaseio.com",
    projectId: "the-marriage-games",
    storageBucket: "the-marriage-games.appspot.com",
    messagingSenderId: "260747650579",
    appId: "1:260747650579:web:8483184b71994d615f81e6",
    measurementId: "G-Q1Q1NH99HE"
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