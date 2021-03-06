import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Hero } from './model';

@Injectable()
export class HeroSearchService{
    constructor(private http: Http){}
    search(term: string): Observable<Hero[]>{
        return this.http
            .get(`api/heroes/?name=${term}`)
            .map(res => res.json().data as Hero[]);
    }
}