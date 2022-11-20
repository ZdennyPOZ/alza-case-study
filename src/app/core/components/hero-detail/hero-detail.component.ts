import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  public hero: Hero =  new Hero('', -1);
  public isCreating = false;

  constructor(private route: ActivatedRoute, private router: Router, private hs : HeroService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      if(id===-1)
      {
        this.isCreating = true;
      }
      else{
        this.isCreating = false;
        this.hs.getHeroById$(id).subscribe(res=>{
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

  public saveDetail():void{
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
