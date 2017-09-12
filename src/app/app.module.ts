import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for routing 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TmpComponent } from './tmp/tmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroComponent,
    DashboardComponent,
    TmpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
