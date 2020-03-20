import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {}

  getNews() {
    return this.afs.collection('news').snapshotChanges();
  }

  deleteNews(id) {
    return this.afs.collection('news').doc(id).delete();
  }

  getNewsById(idNews) {
    return this.afs.collection('news').doc(idNews).get();
  }

  updateNews(idNews, news) {
    return this.afs.collection('news').doc(idNews).set(news);
  }

  addNews(news) {
      return this.afs.collection('news').add(news);
  }

}
