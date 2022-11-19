import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroListItemComponent } from './core/components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';
import { DashboardItemComponent } from './core/components/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent,
    HeroListComponent,
    DashboardItemComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
