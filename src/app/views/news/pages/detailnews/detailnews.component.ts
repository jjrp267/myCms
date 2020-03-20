import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.component.html',
  styleUrls: ['./detailnews.component.scss'],
})
export class DetailnewsComponent implements OnInit {

  editForm: FormGroup;
  idNews: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private fs: FirebaseService) {

                this.createForm();
               }

  ngOnInit() {

     this.getNews();
     this.getNewsById();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getNews() {

    this.route.params.subscribe(params => {
      console.log('parametros de llegada', params);
      this.idNews = params.id;
    });

  }

  getNewsById() {

    this.fs.getNewsById(this.idNews).subscribe(
      data => {
        console.log('datos de la noticia', data.data());
        this.editForm.patchValue({title: data.data().title,
                             subtitle: data.data().subtitle,
                             description: data.data().description});
          }
    );

  }

  updateNews() {

      this.fs.updateNews(this.idNews, this.editForm.value)
      // tslint:disable-next-line:only-arrow-functions
      .then(function() {
        alert('Noticia modificada correctamente');
      })
      .catch(error => {
        console.log(error);
      });

      this.router.navigate(['/news/list']);
  }

}
