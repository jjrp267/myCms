import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.component.html',
  styleUrls: ['./detailnews.component.scss'],
})
export class DetailnewsComponent implements OnInit {


  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) {

                this.createForm();
               }

  ngOnInit() {

     this.getNews();

  }

  createForm() {
    this.form = this.fb.group({
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
    });

  }

}
