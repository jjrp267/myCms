import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from 'src/app/core/http/news.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-createnews',
  templateUrl: './createnews.component.html',
  styleUrls: ['./createnews.component.scss'],
})
export class CreatenewsComponent implements OnInit {

  message: string;
  NewsForm: FormGroup;

  constructor(private fs: FirebaseService) { }

  ngOnInit() {

    this.NewsForm = new FormGroup({'title': new FormControl(null, [Validators.required]),
                                   'subtitle': new FormControl(null, [Validators.required]),
                                   'description': new FormControl(null, [Validators.required])});

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.NewsForm.value);

    this.fs.addNews(this.NewsForm.value)
         .then (
           res => alert('Noticia creada')
         );
    }

}
