import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Hero } from '../../models/hero/hero.model';

@Component({
  selector: 'dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent{

  @Input() hero : Hero | undefined;
  @Output() onDetailClick = new EventEmitter<Hero>();

  public detailClicked():void{
    this.onDetailClick.emit(this.hero);
  }

}
