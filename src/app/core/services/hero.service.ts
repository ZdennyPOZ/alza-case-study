import { Injectable } from '@angular/core';
import { Hero } from '../models/hero/hero.model';
import { of, Observable, switchMap, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private _heroList: Hero[] = [
    new Hero('Typescriptor', 0),
    new Hero('Angularia', 1),
    new Hero('Tyrannosaurus Rx', 2),
    new Hero('Visualizor', 3),
    new Hero('Al Zakus', 4),
    new Hero('Stormius', 5),
    new Hero('Mobilion', 6),
    new Hero('Ekma', 7),
    new Hero('Cascadia', 8),
    new Hero('Ha Ta Mon La', 9),
  ];

  private getHero(id: number): Hero | undefined {
    return this._heroList.find((hero: Hero) => hero.id === id);
  }

  private getHeroIndex(hero: Hero) : number{
    return this._heroList.indexOf(hero);
  }

  public getHeroes$(): Observable<Hero[]> {
    return of(this._heroList);
  }

  public getHeroById$(id:number): Observable<Hero | undefined>{
    return of(this._heroList.find(hero => hero.id === id));
  }
  

  public updateHero(hero: Hero): void {
    let selectedHero: Hero | undefined = this.getHero(hero.id);
    if (selectedHero === undefined) {
      throw new Error('Hero with this id does not exist.');
    }
    this._heroList[this.getHeroIndex(selectedHero)] = hero;
  }

  public deleteHero(hero: Hero): void {
    this._heroList.splice(this.getHeroIndex(hero), 1);
  }

  public createHero(name: string): void {
    let maxId: number = this._heroList.reduce(
      (max, hero) => (hero.id > max ? hero.id : max),
      this._heroList[0].id
    );
    this._heroList.push(new Hero(name, maxId + 1));
  }
}
