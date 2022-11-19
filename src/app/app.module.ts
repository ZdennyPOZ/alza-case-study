import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroListItemComponent } from './core/components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';
import { DashboardItemComponent } from './core/components/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent,
    HeroListComponent,
    DashboardItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
