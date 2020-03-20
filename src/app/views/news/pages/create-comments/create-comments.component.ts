import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss'],
})

export class CreateCommentsComponent implements OnInit, OnDestroy {

  CommentsForm: FormGroup;
  idNews: string;
  private subscription: Subscription;
  message: string;

  constructor(private fs: FirebaseService,
              private route: ActivatedRoute,
              private router: Router,
              private data: DataService) { }

  ngOnInit() {
                                       // tslint:disable-next-line:object-literal-key-quotes
    this.CommentsForm = new FormGroup({'idNews': new FormControl(null, [Validators.required]),
                                       // tslint:disable-next-line:object-literal-key-quotes
                                       'comments': new FormControl(null, [Validators.required])});

    this.getIdNews();

    this.subscription = this.data.currentTitleMessage$.subscribe(
      (message: string) => {
          console.log(message, 'detectado cambio de mensaje en el hijo.....');
          this.message = message;
      }
  );

  }

  onSubmit() {

    console.log(this.CommentsForm.value);

    this.fs.addComments(this.idNews, this.CommentsForm.value.comments)
        .then (
           res => alert('comentarios añadidos')
         );
    }

    getIdNews() {

      this.route.params.subscribe(params => {
        console.log('parametros de llegada', params);
        this.idNews = params.id;
        this.CommentsForm.patchValue({'idNews' : this.idNews});
      });
    }

    info() {
      console.log('datos del form', this.CommentsForm);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
