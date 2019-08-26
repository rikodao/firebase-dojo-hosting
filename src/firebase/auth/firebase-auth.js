import firebase from "../app/firebase-app"; // eslint-disable-line

class FirebaseAuth {
  constructor() {
    this.auth = firebase.auth();
  }

  getCurrentUser() {

  }

  signOut() {
    return firebase.auth().signOut();
  }

  delteAccout() {

  }

  updateAccout(updatedUser) { // eslint-disable-line

  }

  onStateChanged(cb) { // eslint-disable-line

  }
}

export default new FirebaseAuth();
