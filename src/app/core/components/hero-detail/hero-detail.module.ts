import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: ':id', component: HeroDetailComponent }
];

@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroDetailModule { }
