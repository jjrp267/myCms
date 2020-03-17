import { Component, OnInit } from '@angular/core';
import News from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/http/news.service';
//import { FirebaseService } from '../../../../core/services/firebase.service';


@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.scss'],
})

export class ListnewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) {
    console.log('news constructor');
   }

  ngOnInit() {

    this.getNews();

  }

  getNews(): void {

      console.log('news nginit ');
      this.newsService.getNews().subscribe((data: News[]) => {
         console.log('news list', data);
         this.news = data;
      });

  }


  //  getNews() {
  //    this.newsService.getNews()
  //    .subscribe(result => {
  //     console.log('datos de noticias:', result);

  //    });
  //  }


}
