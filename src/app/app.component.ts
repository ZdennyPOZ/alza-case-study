import { Component } from '@angular/core';
import { Hero } from './core/models/hero/hero.model';
import { HeroService } from './core/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public heroes : Hero [] = [];
  constructor(private hs: HeroService) {
    hs.getHeroes$().subscribe((res)=>{
      this.heroes = res;
    })
    this.hs.createHero('Creator');
    this.hs.updateHero(this.heroes[1].id,new Hero('Updator', 5));
    this.hs.deleteHero(this.heroes[6]);
  }
}
