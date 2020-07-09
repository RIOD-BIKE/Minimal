import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class UsersDataFetchService {
  private usersRef;
  constructor(private rtdb: AngularFireDatabase, private afs: AngularFirestore) {
  this.usersRef = rtdb.list('/users');
  }

  async rtdb_createUser(uid: string) {
    await this.rtdb.object('users/' + uid).set({
      bearing: 0,
      latitude: 0,
      longitude: 0
    });
  }

  async rtdb_wipeUser(uid: string) {
    await this.rtdb.object('users/' + uid).remove();
  }

  async firestore_createUser(uid: string) {
    const userExists = (await this.afs.collection('users').doc(uid).get().toPromise()).exists;
    if (userExists) {
      return false;
    }
    await this.afs.collection('users').doc(uid).set({
      activeCluster: null,
      assemblyPoints: [],
      clusters: [],
      isUser: true,
      name: ''
    });
    return true;
  }

  async firestore_wipeUser(uid: string) {
    await this.afs.collection('users').doc(uid).delete();
  }

  async firestore_setName(uid: string, name: string) {
    await this.afs.collection('users').doc(uid).update({
      name
    });
  }

  async firestore_getName(uid: string) {
    const user = (await this.afs.collection('users').doc(uid).ref.get()).data();
    return user.name as string;
  }

  async firestore_setContact(uid: string, contact: string) {
    await this.afs.collection('users').doc(uid).update({
      contact
    });
  }

  async firestore_getContact(uid: string) {
    const user = (await this.afs.collection('users').doc(uid).ref.get()).data();
    return user.contact as string;
  }

  async storage_getSpecialAvatarURL() {
    try {
      return await firebase.storage().ref('special-avatar.png').getDownloadURL() as string;
    } catch (e) {
      if (e.code !== 'storage/object-not-found') { throw e }
    }
  }
}
