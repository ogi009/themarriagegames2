import app from "firebase/app"

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
    }
}

export default Firebase;