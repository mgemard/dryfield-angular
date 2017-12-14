import { Injectable } from '@angular/core';

import { IField } from './field';
import { ReplaySubject } from 'rxjs/replaySubject';
import { Weathers } from './weathers.enum';

@Injectable()
export class GameService {

  private score: number;
  private money: number;
  private water: number;
  fields: IField[];

  private weatherStream: ReplaySubject<Weathers>;
  private availableWeathers: number[];

  private timer;
  public pause;

  constructor() {
    this.score = 0;
    this.money = 50;
    this.water = 3;
    this.fields = [
      { progress: 0, water: 3 },
      { progress: 0, water: 3 },
      { progress: 0, water: 3 }
    ];

    this.availableWeathers = [];
    const keys = Object.keys(Weathers).filter(k => typeof Weathers[k] === 'number');
    this.availableWeathers = keys.map(k => Weathers[k]);
    this.weatherStream = new ReplaySubject();

    this.pause = false;

    this.weatherStream.subscribe(w => {
      const noWater = this.water === 0;
      const noMoney = this.money === 0;

      let fieldsNoWater = true;
      let fieldsNotGrown = true;

      const i = 0;
      this.fields.forEach(f => {
        if (this.fields[i].water > 0) { fieldsNoWater = false; }
        if (this.fields[i].progress === 100) { fieldsNotGrown = false; }
      });
    });
  }

  startGame(): void {
    this.timer = setInterval(() => {
      if (!this.pause) {
        const weather = this.availableWeathers[
          Math.floor(Math.random() * this.availableWeathers.length)
        ];
        // console.log(this.availableWeathers);
        this.weatherStream.next(weather);
      }
    }, 1000);
  }

  isGameStarted(): boolean {
    return this.timer !== undefined;
  }

  addField(field?: IField) {
    if (field) {
      this.fields.push(field);
    } else {
      this.fields.push({ water: 0, progress: 0 });
    }
  }

  getStream(): ReplaySubject<Weathers> {
    return this.weatherStream;
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
