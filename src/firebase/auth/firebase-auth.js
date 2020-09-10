import firebase from "../app/firebase-app"; // eslint-disable-line

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

  updateAccout(updatedUser) { // eslint-disable-line
    return firebase.auth().currentUser.updateProfile(updatedUser);
  }

  onStateChanged(cb) { // eslint-disable-line
    return firebase.auth().onAuthStateChanged(cb);
  }
}

export default new FirebaseAuth();
