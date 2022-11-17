import { Injectable } from '@angular/core';
import { Hero } from '../models/hero/hero.model';
import { of, Observable } from 'rxjs';

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

  constructor() {}

  private getHero(id: number): Hero | undefined {
    let wanted: Hero | undefined = undefined;
    wanted = this._heroList.find((hero: Hero) => hero.id === id);
    return wanted;
  }

  private getHeroIndex(hero: Hero) {
    return this._heroList.indexOf(hero);
  }

  public getHeroes$(): Observable<Hero[]> {
    return of(this._heroList);
  }

  public updateHero(id: number, hero: Hero): void {
    let selectedHero: Hero | undefined = this.getHero(id);
    if (selectedHero === undefined) {
      throw new Error('Hero with this id does not exist.');
    }
    let index: number = this.getHeroIndex(selectedHero);
    hero.id = this._heroList[index].id;
    this._heroList[index] = hero;
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
