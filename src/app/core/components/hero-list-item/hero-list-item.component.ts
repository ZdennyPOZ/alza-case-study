import { Component, Input} from '@angular/core';
import { Hero } from '../../models/hero/hero.model';

@Component({
  selector: 'hero-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent{
  @Input() hero : Hero = new Hero("Unnamed",-1);
}
