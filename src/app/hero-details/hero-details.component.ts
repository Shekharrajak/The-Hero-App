import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

import 'rxjs/add/operator/switchMap';
import { Hero } from '../model';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})



export class HeroDetailsComponent implements OnInit {

  // h =  new Hero(1111,'great');
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  @Input() hero: Hero;
  // hero: Hero;
  ngOnInit():void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  
    console.log(this.hero.name);
    }

  save(): void{
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
  goBack(): void{
    this.location.back();
  }
}
