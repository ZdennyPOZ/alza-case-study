import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { Hero } from './core/models/hero/hero.model';
import { HeroService } from './core/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public heroControl = new FormControl('');
  heroes : Hero[] = [];
  filteredHeroes: Hero[] = [];

  showDashboard : boolean = true;
  showDetail : boolean = false;

  constructor(private router : Router,private hs: HeroService){}

  ngOnInit(): void {


   this.hs.getHeroes$().subscribe((res)=>{
    this.heroes = res;
    this.filteredHeroes = cloneDeep(res);
   })

   this.heroControl.valueChanges.subscribe((res)=>{
    let keyword = "" + res;
    this.filteredHeroes = this.heroes.filter(hero => hero.name.toLowerCase().indexOf(keyword.toLowerCase()) === 0)})
  }

  getHeroName(hero: Hero) {
    return hero.name;
  }

  public showList(): void{
    this.showDashboard = false;
  }
  public showDash(): void{
    this.showDashboard = true;
  }
  public createNewHero(): void{
    this.router.navigate(['hero/-1']);
  }
  public openHeroDetail($evt:any): void{
    let route = 'hero/' + $evt.option.value._id;
    this.router.navigate([route]);
  }
}
