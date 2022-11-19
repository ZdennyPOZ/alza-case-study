import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showDashboard : boolean = true;

  public showList(): void{
    this.showDashboard = false;
  }
  public showDash(): void{
    this.showDashboard = true;
  }
}
