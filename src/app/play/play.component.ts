import { Component, OnInit } from '@angular/core';

import { IField } from '../field';

import { GameService } from '../game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  waterPrice: number;
  showBuyWater: boolean;

  constructor(private gameService: GameService) {
    this.waterPrice = 1;
    this.showBuyWater = false;
  }

  ngOnInit() {
  }

  startGame() {
    if (!this.gameService.isGameStarted()) {
      this.gameService.startGame();
    }
  }

  addField() {
    this.gameService.addField();
  }

  openBuyWater() {
    this.showBuyWater = !this.showBuyWater;
    this.gameService.pause = this.showBuyWater ? true : false;
  }

  buyWater(water: number) {
    console.log(typeof water);
    water = Number(water);
    if (this.gameService.getMoney() >= water * this.waterPrice) {
      this.gameService.setWater(this.gameService.getWater() + water);
      this.gameService.setMoney(this.gameService.getMoney() - water * this.waterPrice);
    }
    this.showBuyWater = false;
    this.gameService.pause = false;
  }
}
