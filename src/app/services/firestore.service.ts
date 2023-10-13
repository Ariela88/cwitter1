import { Injectable } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Firestore, addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { FireappService } from './fireapp.service';
import { OurUser } from '../model/our-user';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {



  db: Firestore;

  constructor(private fireApp: FireappService) {
    this.db = getFirestore(this.fireApp.app)

  }

  getCwits() {

    const cwits = collection(this.db, 'cwit');
    return getDocs(cwits).then(snap => snap.docs.map(doc => {
      return {
        text: doc.data()['text'],
        url: doc.data()['url'],
        author: doc.data()['author'],
        authorName: doc.data()['authorName'],
        creationTime: doc.data()['creationTime'].toDate(),
      }
    }));


  }


  // initDb(app: any){
  //   this.db = getFirestore(app);
  // }

  postOurUser(ourUser: OurUser, uid: string){

    const docUrl = doc(this.db, 'user', uid);
     return setDoc(docUrl, ourUser)



  }

  getOurUser(uid: string){

    const docUrl = doc(this.db, 'user', uid);
    console.log(docUrl)
    return getDoc(docUrl);

  }

  loadUserCwits(uid: string) {
    const docUrl = doc(this.db, 'user', uid);
    console.log(docUrl)
    return getDoc(docUrl);
  }




}


