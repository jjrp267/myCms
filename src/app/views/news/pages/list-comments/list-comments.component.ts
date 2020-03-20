import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import Comments from 'src/app/core/models/comments';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss'],
})
export class ListCommentsComponent implements OnInit {

  idNews: string;
  comments = [];

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router,
              private dataservice: DataService) { }

  ngOnInit() {

    this.getIdNews();

  }

  getIdNews() {

    this.route.params.subscribe(params => {
      // this.contactsService.editContact(params['id']).subscribe(res => {
      //   this.contact = res;
      // });
      console.log('parametros de llegada', params);
      this.idNews = params.id;
      // this.CommentsForm.patchValue({'idNews' : this.idNews});


      this.dataservice.setBehaviorView({idNews: params.id});

      this.getListComments();
    });
  }


  getListComments() {

    // ('avisos', ref => ref.where('categoria','==', categoriaToFilter )
    // this.afs.collection('comments').snapshotChanges().subscribe(
    this.afs.collection('comments', ref => ref.where('idNews', '==', this.idNews )).snapshotChanges().subscribe(
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
     this.afs.collection('comments').doc(id).delete().then(function() {
         alert('comentario borrado correctamente');
         // tslint:disable-next-line:only-arrow-functions
     }).catch(function(error) {
         alert('Error al borrar el comentario: ' + error);
     });
  }

}
