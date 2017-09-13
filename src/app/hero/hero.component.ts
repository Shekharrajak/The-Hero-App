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
     selectedHero: Hero;
    //  onSelect(her: Hero): void{
    //    this.selectedHero = her;
    //  }

    getHeroes(): void{
      // this.heros = this.heroService.getHeroes();
      this.heroService.getHeroes().then(heroes => this.heros = heroes);
      // this.heros: Hero[] = [{id: 12, name: 'shekhar'}]
    }

    // add new hero
    add(name: string):void{
      name  = name.trim();
      if(!name){
        return ;
      }
      this.heroService.create(name)
        .then(hero =>{
          this.heros.push(hero)
        })
    }

    delete(hero: Hero): void{
      this.heroService
        .delete(hero.id)
        .then(() => {
          this.heros= this.heros.filter(h => h.id !== hero.id);
          if(this.selectedHero == hero){this.selectedHero = null;}
        })

    }
    ngOnInit(): void {
      this.getHeroes();
    }
}
