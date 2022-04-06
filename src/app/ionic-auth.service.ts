import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class IonicAuthService {
isConnected = 0;
  
  constructor(private angularFireAuth: AngularFireAuth) { }

  setIsConnected(val){
    this.isConnected=val;
  }
  createUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            this.isConnected=1;
            //set native storage isConnected {isconnected:1, user:res}
            resolve(res);
          },
          err => reject(err))
    })
  }
  getConnected(){
  return this.isConnected;
  }
  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            console.log("Sign out");
            this.isConnected=0;
            //set native storage isConnected {isconnected:1, user:[]}
            resolve();
          }).catch(() => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.angularFireAuth.user
  }
}
