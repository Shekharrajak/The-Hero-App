import { Injectable } from '@angular/core';

import { Hero } from './model';
import { HEROES } from './mock-heroes' ;
import 'rxjs/add/operator/toPromise';

import {Http} from '@angular/http';
@Injectable()
export class HeroService {

  // constructor() { }

  // getHeroes(): Promise<Hero[]>{
  //   return Promise.resolve(HEROES);
  // }

  private heroesUrl = 'api/heroes';

  constructor(private http: Http){}

  getHeroes(): Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
      .then(hros => hros.find(hro => hro.id == id));
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);// for demo error
    return Promise.reject(error.message || error);
  }
}
