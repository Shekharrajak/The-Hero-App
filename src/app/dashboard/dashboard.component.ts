import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../model';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'title for dashboard';
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
      this.heroService.getHeroes().then(heroes => this.heros = heroes.slice(1,4));
      // this.heros: Hero[] = [{id: 12, name: 'shekhar'}]
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}
