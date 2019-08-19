import * as firebase from "firebase";
import config from "./firebase-config";

class FirebaseApp {
  constructor() {
    const isInitialized = firebase.apps.length;
    this._app = isInitialized ? firebase.app() : firebase.initializeApp(config);
  }
  get app() {
    return this._app;
  }
}
const firebaseInstance = new FirebaseApp();
export default firebaseInstance.app;
