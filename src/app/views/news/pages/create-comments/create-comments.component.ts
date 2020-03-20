import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss'],
})
export class CreateCommentsComponent implements OnInit {

  CommentsForm: FormGroup;
  idNews: string;

  constructor(private afs: AngularFirestore,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
                                       // tslint:disable-next-line:object-literal-key-quotes
    this.CommentsForm = new FormGroup({'idNews': new FormControl(null, [Validators.required]),
                                       // tslint:disable-next-line:object-literal-key-quotes
                                       'comments': new FormControl(null, [Validators.required])});

    this.getIdNews();
  }

  onSubmit() {

    console.log(this.CommentsForm.value);

    this.afs.collection('comments').add({
        idNews: this.idNews,
        comments:  this.CommentsForm.value.comments}
         ).then (
           res => alert('comentarios añadidos')
         );
    }

    getIdNews() {

      this.route.params.subscribe(params => {
        // this.contactsService.editContact(params['id']).subscribe(res => {
        //   this.contact = res;
        // });
        console.log('parametros de llegada', params);
        this.idNews = params.id;
        this.CommentsForm.patchValue({'idNews' : this.idNews});
      });
    }

    info() {
      console.log('datos del form', this.CommentsForm);
    }

}
