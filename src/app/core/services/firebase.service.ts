import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {}

  // News

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

  // Comments

  getComments(idNews) {
    return this.afs.collection('comments', ref => ref.where('idNews', '==', idNews )).snapshotChanges();
  }

  deleteComment(id) {
    return this.afs.collection('comments').doc(id).delete();
  }

  addComments(idNews, comments) {

    return this.afs.collection('comments').add({
        idNews: idNews,
        comments:  comments}
         );
}

}
