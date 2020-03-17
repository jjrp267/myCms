import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import News from '../models/news.model';

@Injectable()
export class NewsService {

  uri = 'https://my-json-server.typicode.com/jjrp267/mycmsdb/news';

  constructor(
    private http: HttpClient
  ) {}

  getNews(): Observable<News[] | null> {
    return this.http.get<News[]>(this.uri);
  }

}
