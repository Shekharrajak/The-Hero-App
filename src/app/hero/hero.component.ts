import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../model';
@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // constructor() { }
  title = 'Hero title from hero comp';
  // ngOnInit() {
  // }
  // title = 'title for dashboard';
  constructor(private heroService: HeroService) { }
  // heros11 = 'askjfkdsaf';
  // heros1: Hero = {id: 12, name: 'shekjha'};
  // ngOnInit():void{

  // }
    heros: Hero[];// = [{id: 12, name: 'sjhekhar'}];
    // selectedHero: Hero;
    // onSelect(her: Hero): void{
    //   this.selectedHero = her;
    // }

    getHeroes(): void{
      // this.heros = this.heroService.getHeroes();
      this.heroService.getHeroes().then(heroes => this.heros = heroes);
      // this.heros: Hero[] = [{id: 12, name: 'shekhar'}]
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}
