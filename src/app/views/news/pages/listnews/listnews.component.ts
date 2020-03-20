import { Component, OnInit } from '@angular/core';
import News from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/http/news.service';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseService } from '../../../../core/services/firebase.service';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss'],
})

export class ListnewsComponent implements OnInit {


  news = [];

  // constructor(private newsService: NewsService) {
  //   console.log('news constructor');
  //  }
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.getNews();

  }

  getNews(): void {

    this.afs.collection('news').snapshotChanges().subscribe(
        data => {
           const newsArray = [];
           console.log('valores', data);
           data.forEach((element, index ) => {
              console.log('element:', element.payload.doc.id);
              const newsObj = {} as News;
              newsObj.id = element.payload.doc.id;
              newsObj.title = element.payload.doc.data()['title'];
              newsObj.subtitle = element.payload.doc.data()['subtitle'];
              newsObj.description = element.payload.doc.data()['description'];
              newsArray.push(newsObj);
           });
           // console.log(newsArray);
           this.news = newsArray;
            });
  }

  deleteNews(id) {

        // tslint:disable-next-line:only-arrow-functions
        this.afs.collection('news').doc(id).delete().then(function() {
             alert('Noticia borrada correctamente');
        // tslint:disable-next-line:only-arrow-functions
        }).catch(function(error) {
             alert('Error al borrar la noticia: ' + error);
      });

  }

  getCommnets(id) {

    console.log('comentarios');

  }

}
