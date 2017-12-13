import { Component, OnInit } from '@angular/core';

import { IField } from '../field';

import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  nbField = 3;
  fields: IField[] = [];
  name = 'mat';
  waterPrice = 1;

  score = 0;
  money = 50;
  water = 30;
  waterField = 30;

  timer: number;
  timeInterval = 1000;
  pause: boolean;

  showBuyWater = false;

  constructor(private gameService: GameService) {
    // for (let i = 0; i < this.nbField; i++) {
    //   this.fields.push(new IField(i, this.waterField));
    // }
  }

  ngOnInit() {
  }

  startGame() {
    console.dir(this.fields);
    console.dir('timer:' + this.timer);
    this.timer = window.setInterval(() => this.gameLoop(), 1000);
  }

  gameLoop() {
    // console.dir('timer:' + this.timer);
    // if (!this.pause) {
    //   this.fields.forEach(field => field.grow());
    // }
  }

  openBuyWater() {
    this.showBuyWater = !this.showBuyWater;
    this.pause = this.showBuyWater ? true : false;
  }

  buyWater(qtyWaterBought: number) {
    if (this.money >= qtyWaterBought * this.waterPrice) {
      this.water += qtyWaterBought;
    }
  }

  irrigate(fieldId: number) {
    // const field = this.fields[fieldId];
    // if (this.water > 0) {
    //   field.irrigate();
    //   this.water--;
    // }

  }

  harvest(fieldId: number) {
    // const field = this.fields[fieldId];
    // if (field.progress === 1) {
    //   field.harvest();
    // }

  }
}
