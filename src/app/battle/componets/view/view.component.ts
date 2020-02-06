import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/product';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  card: Card = {
    cost: 1,
    title: '打击',
    view: '刀',
    desc: '造成6点伤害。',

  };
  cards: Card[] = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 4; index++) {
      this.cards.push(this.card);
    }

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

}
