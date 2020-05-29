import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/product';
import { CdkDragDrop, moveItemInArray, CdkDropList } from '@angular/cdk/drag-drop';

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
  monsters = [
    'Get up',
    'Brush teeth',
    'Take a shower',
  ];
  selectCard: Card;
  selectMonster = '';

  cards: Card[] = [];
  constructor() { }

  @ViewChild('todoList') todolist: CdkDropList;

  ngOnInit() {
    for (let index = 0; index < 6; index++) {
      let cardtemp = JSON.parse(JSON.stringify(this.card));
      cardtemp.title += index;
      this.cards.push(cardtemp);
    }

  }

  drop(event: CdkDragDrop<string[]>) {

    // 当放在怪物上时,判断
    if (this.selectMonster ) {
      this.selectCard = this.cards[event.previousIndex];
      this.attack(event.previousIndex, this.selectMonster);
    }
  }

  //获取怪物信息
  mouseEnter(e) {
    this.selectMonster = this.monsters[e.target.id];
  }
  mouseLeave() {
    this.selectMonster = null;
  }

  attack(cardIndex, monster) {
    this.selectCard = this.cards[cardIndex];
    this.cards.splice(cardIndex, 1);
    console.log('对', monster, this.selectCard.desc);

  }
}
