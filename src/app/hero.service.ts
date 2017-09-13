import { Injectable } from '@angular/core';

import { Hero } from './model';
import { HEROES } from './mock-heroes' ;
import 'rxjs/add/operator/toPromise';

import {Headers, Http} from '@angular/http';
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

  // getHero(id: number): Promise<Hero>{
  //   return this.getHeroes()
  //     .then(hros => hros.find(hro => hro.id == id));
  // }

  getHero(id: number): Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  } 

  private headrs = new Headers({'Content-Type': 'application/json'});

  update(hro: Hero): Promise<Hero>{
    const url = `${this.heroesUrl}/${hro.id}`;
    return this.http
      .put(url, JSON.stringify(hro), {headers: this.headrs})
      .toPromise()
      .then(() => hro)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
    console.error('An error occured', error);// for demo error
    return Promise.reject(error.message || error);
  }
}
