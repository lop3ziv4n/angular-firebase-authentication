import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {
  }

  google() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  facebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  emailLogin(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  emailSign(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  state(auth) {
    return this.afAuth.authState.subscribe(auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
}
