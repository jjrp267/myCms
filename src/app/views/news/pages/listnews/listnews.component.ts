import { Component, OnInit } from '@angular/core';
import News from 'src/app/core/models/news.model';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss'],
})

export class ListnewsComponent implements OnInit {

  news = [];

  constructor(private fs: FirebaseService) { }

  ngOnInit() {

    this.getNews();
  }

  getNews(): void {

      this.fs.getNews().subscribe(
        data => {
           const newsArray = [];
           console.log('valores', data);
           data.forEach((element, index ) => {
              console.log('element id:', element.payload.doc.id);
              console.log('element:', element.payload.doc.data());
              console.log('element datetime:', element.payload.doc.data()['fecAlta'].toDate());
              const newsObj = {} as News;
              newsObj.id = element.payload.doc.id;
              newsObj.title = element.payload.doc.data()['title'];
              newsObj.subtitle = element.payload.doc.data()['subtitle'];
              newsObj.description = element.payload.doc.data()['description'];
              newsObj.fecAlta = element.payload.doc.data()['fecAlta'].toDate();
              newsArray.push(newsObj);
           });
           // console.log(newsArray);
           this.news = newsArray;
            });
  }

  deleteNews(id) {

    // tslint:disable-next-line:only-arrow-functions
    this.fs.deleteNews(id).then(function() {
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
