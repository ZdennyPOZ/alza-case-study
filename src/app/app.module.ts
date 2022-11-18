import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroListItemComponent } from './core/components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
