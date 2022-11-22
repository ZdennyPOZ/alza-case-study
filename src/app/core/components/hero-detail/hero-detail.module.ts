import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

const routes: Routes = [
  { path: ':id', component: HeroDetailComponent },
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HeroDetailModule { }
