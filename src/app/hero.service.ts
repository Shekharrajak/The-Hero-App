import { Injectable } from '@angular/core';

import { Hero } from './model';
import { HEROES } from './mock-heroes' ;

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
      .then(hros => hros.find(hro => hro.id == id));
  }
}
