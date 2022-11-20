import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router : Router){}

  showDashboard : boolean = true;
  showDetail : boolean = false;

  public showList(): void{
    this.showDashboard = false;
  }
  public showDash(): void{
    this.showDashboard = true;
  }
  public createNewHero(): void{
    this.router.navigate(['hero/-1']);
  }
}
