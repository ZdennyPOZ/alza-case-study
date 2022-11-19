import { Component} from '@angular/core';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  
  public heroes : Hero [] = [];
  constructor(private hs: HeroService) {
    hs.getHeroes$().subscribe((res)=>{
      this.heroes = res;
    })
  }
  openHeroDetail($event : Hero){
  }
  deleteHero($event : Hero){
    this.hs.deleteHero($event);
  }
}
