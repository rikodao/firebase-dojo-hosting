import firebase from "../app/firebase-app";
import firebaseui from "firebaseui-ja";
import "firebaseui-ja/dist/firebaseui.css";
import uiConfig from "./firabaseui-config.js";

class FirebaseUI {
  constructor() {
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  }
  getUIByID(id) {
    this.ui.start(id, {
      callbacks: {
        signInSuccessWithAuthResult: uiConfig.signInSuccessWithAuthResult,
        signInFailure: uiConfig.signInFailure
      },
      autoUpgradeAnonymousUsers: true,
      signInFlow: "redirect",
      signInSuccessUrl: "/",
      signInOptions: uiConfig.signInOptions
    });
  }
}

export default new FirebaseUI();
