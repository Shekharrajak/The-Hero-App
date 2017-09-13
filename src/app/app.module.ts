import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for routing 
import { RouterModule } from '@angular/router';

// for hhtp module
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// imports for loading and configuring the in-memory web api;
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSerchComponent } from './hero-serch/hero-serch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent,
    HeroSerchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'hero_link',
        component: HeroComponent 
      },
      {
        path: 'dashboard_link', 
        component: DashboardComponent
      },
      {
        path:'',
        redirectTo: '/dashboard_link',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailsComponent
      }
    ])

  ],

  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
