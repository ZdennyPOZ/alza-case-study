import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  
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
  deleteHero($event : Hero){
    this.hs.deleteHero($event);
  }
}
