import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import Comments from 'src/app/core/models/comments';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss'],
})

export class ListCommentsComponent implements OnInit, OnDestroy {

  idNews: string;
  comments = [];
  titleNews: string;
  private subscription: Subscription;

  constructor(private fs: FirebaseService,
              private route: ActivatedRoute,
              private router: Router,
              private dataservice: DataService) { }

  ngOnInit() {

    this.getIdNews();

  }

  getIdNews() {

    this.route.params.subscribe(params => {
      console.log('parametros de llegada', params);
      this.idNews = params.id;

      this.fs.getNewsById(this.idNews).subscribe(
        data => {
           console.log('titulo de la noticia', data.data().title);
           this.titleNews = data.data().title;
           this.dataservice.changeTitleNews(data.data().title);
        });

      this.getListComments();
    });
  }

  getListComments() {

     this.fs.getComments(this.idNews).subscribe(
     data => {
         const newsArray = [];
         console.log('valores', data);
         data.forEach((element, index ) => {
            console.log('element:', element.payload.doc.id);
            const commentsObj = {} as Comments;
            commentsObj.id = element.payload.doc.id;
            commentsObj.idNews = element.payload.doc.data()['idNews'];
            commentsObj.comments = element.payload.doc.data()['comments'];
            newsArray.push(commentsObj);
         });
         // console.log(newsArray);
         this.comments = newsArray;
          });



  }

  deleteComments(id) {

     console.log('delete comentarios');
     // tslint:disable-next-line:only-arrow-functions
     this.fs.deleteComment(id).then(function() {
         alert('comentario borrado correctamente');
         // tslint:disable-next-line:only-arrow-functions
     }).catch(function(error) {
         alert('Error al borrar el comentario: ' + error);
     });
  }

  ngOnDestroy() {
    if (this.subscription){
     this.subscription.unsubscribe();
    }
  }

}
