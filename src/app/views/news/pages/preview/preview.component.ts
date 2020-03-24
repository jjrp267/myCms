import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import News from 'src/app/core/models/news.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

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
            // console.log('element datetime:', element.payload.doc.data()['fecAlta'].toDate());
            const newsObj = {} as News;
            newsObj.id = element.payload.doc.id;
            newsObj.title = element.payload.doc.data()['title'];
            newsObj.subtitle = element.payload.doc.data()['subtitle'];
            newsObj.description = element.payload.doc.data()['description'];
            // newsObj.fecAlta = element.payload.doc.data()['fecAlta'].toDate();
            newsArray.push(newsObj);
         });
         // console.log(newsArray);
         this.news = newsArray;
          });
    }
}
