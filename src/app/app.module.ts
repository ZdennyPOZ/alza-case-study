import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroListItemComponent } from './core/components/hero-list-item/hero-list-item.component';
import { HeroListComponent } from './core/components/hero-list/hero-list.component';
import { DashboardItemComponent } from './core/components/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { LongNameDirective } from './core/directives/long-name.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'hero', loadChildren: () => import('./core/components/hero-detail/hero-detail.module').then(m => m.HeroDetailModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent,
    HeroListComponent,
    DashboardItemComponent,
    DashboardComponent,
    LongNameDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
