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
  @Input() water: IField;
  @Output() irrigateEmitter = new EventEmitter();
  @Output() harvestEmitter = new EventEmitter();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  irrigate() {
    // this.irrigateEmitter.emit(this.field.id);
  }

  harvest() {
    // this.harvestEmitter.emit(this.field.id);
  }

}
