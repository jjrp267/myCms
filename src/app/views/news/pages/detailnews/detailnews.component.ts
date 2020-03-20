import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
              private afs: AngularFirestore) {

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
      // this.contactsService.editContact(params['id']).subscribe(res => {
      //   this.contact = res;
      // });
      console.log('parametros de llegada', params);
      this.idNews = params.id;
    });

  }

  getNewsById() {

    this.afs.collection('news').doc(this.idNews).get().subscribe(

      data => {
        console.log('datos de la noticia', data.data());
        this.editForm.patchValue({title: data.data().title,
                             subtitle: data.data().subtitle,
                             description: data.data().description});
          }
    );

  }

  onSubmit() {

      // Add a new document in collection "cities"
      this.afs.collection('news').doc(this.idNews).set({
        title: this.editForm.value.title,
        subtitle: this.editForm.value.subtitle,
        description: this.editForm.value.description
      })
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
