import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/core/http/news.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.scss'],
})
export class CreatenewsComponent implements OnInit {

  name = new FormControl('');
  message: string;

  NewsForm = new FormGroup({
    title: new FormControl(''),
    subtitle: new FormControl(''),
    description: new FormControl('')
  });


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {}

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.NewsForm.value);

    this.afs.collection('news').add({
        tittle: this.NewsForm.value.title,
        subtitle:  this.NewsForm.value.subtitle,
        description : this.NewsForm.value.description}
         ).then (
           res => alert('Noticia creada')
         );
    }

  addNews(news) {
      // this.firebaseService.createNews(news)
      //   .subscribe(res => {
      //       this.message = 'Añadido correctamente el contacto';
      //       // this.snackbar.open('Los cambios se han guardado correctamente.', '', this.snack_config);
      //     }
      //   );
    }


}
