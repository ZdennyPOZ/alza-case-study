import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Hero } from '../../models/hero/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  public hero: Hero | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private hs : HeroService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.hs.getHeroById$(id).subscribe(res=>{
        this.hero = res;
      })
    })
  }

}
