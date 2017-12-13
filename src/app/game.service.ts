import { Injectable } from '@angular/core';

import { IField } from './field';

@Injectable()
export class GameService {

  private score: number;
  private money: number;
  private water: number;
  fields: IField[];

  constructor() {
    this.score = 0;
    this.money = 5;
    this.water = 3;
    this.fields = [
      { progress: 0, water: 12 },
      { progress: 0, water: 12 },
      { progress: 0, water: 12 }
    ];
  }

  setScore(score): void {
    this.score = score;
  }

  getScore(): number {
    return this.score;
  }

  setMoney(money): void {
    this.money = money;
  }

  getMoney(): number {
    return this.money;
  }

  setWater(water): void {
    this.water = water;
  }

  getWater(): number {
    return this.water;
  }

}
