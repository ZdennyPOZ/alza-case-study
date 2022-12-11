export interface IHero {
  id: number;
  name: string;
}
export class Hero implements IHero {
  private _id: number;
  private _name: string;

  constructor(name: string, id: number) {
    this._name = name;
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public get id(): number {
    return this._id;
  }

  public set name(name: string) {
    let hasNumbers = /\d/.test(name);
    if (hasNumbers === true) {
      throw new Error('Hero can not have numbers in his name.');
    }
    if (!name) {
      throw new Error('This is not a valid name.');
    }
    this._name = name;
  }

  public set id(id: number) {
    if (!id) {
      throw new Error('This is not a valid id.');
    }
    this._id = id;
  }
}
