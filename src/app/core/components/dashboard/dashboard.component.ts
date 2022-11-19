import { Component} from '@angular/core';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public heroes : Hero [] = [];
  
  constructor(private hs: HeroService) {
    hs.getHeroes$().subscribe((res)=>{
      this.heroes = res;
    })
  }

}
