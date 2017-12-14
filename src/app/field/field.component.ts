import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IField } from '../field';

import { GameService } from '../game.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() field: IField;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getStream().subscribe((weather) => {
      this.grow();
    }, (error) => {
      console.log(error);
    });
  }

  grow() {
    if (this.field.water === 0) { this.field.progress = 0; }
    if (this.field.water > 0) {
      this.field.water--;
      this.field.progress += 0.05;
    }
  }

  harvest() {
    if (this.field.progress !== 100) { return; }

    this.field.progress = 0;
    this.gameService.setScore(this.gameService.getScore() + 1);
    this.gameService.setMoney(this.gameService.getMoney() + 1);
  }

  irrigate() {
    if (this.gameService.getWater() > 0) {
      this.gameService.setWater(this.gameService.getWater() - 1);
      this.field.water++;
    }
  }
}
