import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Hero } from '../../models/hero/hero.model';

@Component({
  selector: 'hero-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent{
  @Input() hero : Hero | undefined;
  @Output() onDetailClick = new EventEmitter<Hero>();
  @Output() onDeleteClick = new EventEmitter<Hero>();

  public detailClicked():void{
    this.onDetailClick.emit(this.hero);
  }
  public deleteClicked():void{
    this.onDeleteClick.emit(this.hero);
  }
}

