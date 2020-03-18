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
           // console.log('valores', data[0].payload.doc.data());
           data.forEach((element, index ) => {
              const newsObj = {} as News;
              newsObj.title = element.payload.doc.data()['tittle'];
              newsObj.subtitle = element.payload.doc.data()['tittle'];
              newsObj.description = element.payload.doc.data()['description'];
              newsArray.push(newsObj);
           });
           // console.log(newsArray);
           this.news = newsArray;
            });
  }

  // getNews(): void {

  //     console.log('news nginit ');
  //     this.newsService.getNews().subscribe((data: News[]) => {
  //        console.log('news list', data);
  //        this.news = data;
  //     });

  // }

}
