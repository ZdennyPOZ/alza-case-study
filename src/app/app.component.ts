import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { Subject, takeUntil } from 'rxjs';
import { Hero } from './core/models/hero/hero.model';
import { HeroService } from './core/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('autoinput') autocomplete!: ElementRef;
  public heroControl = new FormControl('');
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  destroyed$: Subject<boolean> = new Subject();

  private _showDashboard: boolean = true;
  public get showDashboard(): boolean {
    return this._showDashboard;
  }
  public set showDashboard(value: boolean) {
    this._showDashboard = value;
  }
  showDetail: boolean = false;

  constructor(private router: Router, private hs: HeroService) {}

  ngOnInit(): void {
    this.hs
      .getHeroes$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        this.heroes = res;
        this.filteredHeroes = cloneDeep(res);
      });

    this.heroControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((res) => {
        let keyword = '' + res;
        this.filteredHeroes = this.heroes.filter(
          (hero) => hero.name.toLowerCase().indexOf(keyword.toLowerCase()) === 0
        );
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getHeroName(hero: Hero) {
    return hero.name;
  }

  public showList(): void {
    this.showDashboard = false;
  }
  public showDash(): void {
    this.showDashboard = true;
  }
  public createNewHero(): void {
    this.router.navigate(['hero/-1']);
  }
  public openHeroDetail($evt: any): void {
    this.autocomplete.nativeElement.value = '';
    this.autocomplete.nativeElement.blur();
    let route = 'hero/' + $evt.option.value._id;
    this.router.navigate([route]);
  }
}
