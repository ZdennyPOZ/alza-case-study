import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public heroes : Hero [] = [];
  
  constructor(private hs: HeroService, private router: Router) {
    hs.getHeroes$().subscribe((res)=>{
      this.heroes = res;
    })
  }

  openHeroDetail($event : Hero){
    let route = 'hero/'+$event.id;
    this.router.navigate([route]);
  }
}
