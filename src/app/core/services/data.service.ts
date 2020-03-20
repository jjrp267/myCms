import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject<string>('default message');
    public personObject: BehaviorSubject<any> = new BehaviorSubject<any>({
        personId: 1,
        name: 'john doe'
        });
    // tslint:disable-next-line:ban-types
    private news = new BehaviorSubject<Object>({textVal: 'Hello'});
    currentMessage$: Observable<string> = this.messageSource.asObservable();

    constructor(
        private http: HttpClient,
    ) { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    getPost() {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    }

    // tslint:disable-next-line:ban-types
    setBehaviorView(news: Object) {
        this.news.next(news);
    }

    getBehaviorView(): Observable<any> {
        return this.news.asObservable();
    }


}
