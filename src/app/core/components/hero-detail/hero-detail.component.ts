import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';
import { cloneDeep } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy{

  public hero: Hero =  new Hero('', -1);
  destroyed$: Subject<boolean> = new Subject();
  public isCreating = false;

  constructor(private route: ActivatedRoute, private router: Router, private hs : HeroService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      if(id===-1)
      {
        this.isCreating = true;
      }
      else{
        this.isCreating = false;
        this.hs.getHeroById$(id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(res=>{
          if(res!==undefined){
            this.hero = cloneDeep(res);
          }
          else{
          this.closeDetail();
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public saveDetail():void{
    if(this.hero.name === ''){
      this.snackBar.open('Plase enter hero name.', 'Close',
      {
        duration:2000,
        panelClass:'warning-snackbar'
      }
    ); 
      return;
    }
    if(this.isCreating){
      this.hs.createHero(this.hero.name);
    }
    else{
      this.hs.updateHero(this.hero);
    }
    this.router.navigate(['']);
  }

  public closeDetail(): void{
    this.router.navigate(['']);
  }
}
