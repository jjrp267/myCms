import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private titleNewsSource = new BehaviorSubject<string>('my title');
    currentTitleMessage$: Observable<string> = this.titleNewsSource.asObservable();

    // public personObject: BehaviorSubject<any> = new BehaviorSubject<any>({
    //     personId: 1,
    //     name: 'john doe'
    //     });
    // tslint:disable-next-line:ban-types
    // private news = new BehaviorSubject<Object>({textVal: 'Hello'});

    constructor(

    ) { }

    changeTitleNews(titleNews: string) {
        console.log('changing dataservice information to:' + titleNews);
        this.titleNewsSource.next(titleNews);
    }

}
