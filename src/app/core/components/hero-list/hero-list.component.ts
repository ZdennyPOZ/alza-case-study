import { Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnDestroy {
  
  public heroes : Hero [] = [];
  destroyed$: Subject<boolean> = new Subject();
  
  constructor(private hs: HeroService, private router: Router) {
    hs.getHeroes$()
    .pipe(takeUntil(this.destroyed$))
    .subscribe((res)=>{
      this.heroes = res;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  openHeroDetail($event : Hero){
    let route = 'hero/'+$event.id;
    this.router.navigate([route]);
  }
  deleteHero($event : Hero){
    this.hs.deleteHero($event);
  }
}
