import { Component, OnInit } from '@angular/core';

import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { HeroService } from './hero.service';

import { Hero } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private heroService: HeroService){}
    title = 'Hero App';
    // hero1 = 'shekhar_hero1'
    hero = new Hero(1352, 'shekhar');
    // heros: Hero[] = [{id: 12, name: 'shekhar'}];
    // selectedHero: Hero;
    // onSelect(her: Hero): void{
      // this.selectedHero = her;
    // }

    // getHeroes(): void{
      // this.heros = this.heroService.getHeroes();
      // this.heroService.getHeroes().then(heroes => this.heros = heroes);
      // this.heros: Hero[] = [{id: 12, name: 'shekhar'}]
    // }

    // ngOnInit(): void {
      // this.getHeroes();
    // }
  }
