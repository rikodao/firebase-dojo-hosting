import firebase from "../app/firebase-app";

class FirebaseAuth {
  constructor() {
    this.auth = firebase.auth();
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  signOut() {
    return firebase.auth().signOut();
  }

  delteAccout() {
    return firebase.auth().currentUser.delete();
  }

  updateAccout(updatedUser) {
    return firebase.auth().currentUser.updateProfile(updatedUser);
  }

  onStateChanged(cb) {
    return firebase.auth().onAuthStateChanged(cb);
  }
}

export default new FirebaseAuth();
