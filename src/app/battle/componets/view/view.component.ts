import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/product';
import { CdkDragDrop, moveItemInArray, CdkDropList } from '@angular/cdk/drag-drop';
import { fromEvent } from 'rxjs';
import { map, takeUntil, concatAll, withLatestFrom, startWith, filter } from 'rxjs/operators';
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
      const cardtemp = JSON.parse(JSON.stringify(this.card));
      cardtemp.title += index;
      this.cards.push(cardtemp);
    }
    this.drogTest();
  }

  drop(event: CdkDragDrop<string[]>) {

    // 当放在怪物上时,判断
    if (this.selectMonster) {
      this.selectCard = this.cards[event.previousIndex];
      this.attack(event.previousIndex, this.selectMonster);
    }
  }

  // 获取怪物信息
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

  drogTest() {

    const drogDiv = document.getElementById('test');
    const arrow = document.getElementById('arrow');
    const wrapper = document.getElementById('wrapper');
    const column = document.getElementById('column');
    const middle = document.getElementById('middle');
    const rect = middle.getBoundingClientRect();
    const memo = {
      x: 0,
      y: 0
    };
    const mouseDown = fromEvent(wrapper, 'mousedown');
    const mouseUp = fromEvent(document, 'mouseup');
    const mouseMove = fromEvent(document, 'mousemove');
    const mouseLeave = fromEvent(wrapper, 'mouseleave');

    mouseLeave.pipe(
      takeUntil(mouseDown)
    )
      .subscribe(() => console.log(1));
    const validValue = (value, max, min) => {
      return Math.min(Math.max(value, min), max);
    };
    mouseDown.subscribe((r) => {
      console.log(memo);
      // @ts-ignore
      memo.x = r.target.offsetLeft;
      // @ts-ignore
      memo.y = r.target.offsetTop;
    });
    const source = mouseDown
      .pipe(
        map(event => mouseMove
          .pipe(
            filter(m => {
              //  console.log(rect);
              console.log(m);
              if (wrapper.offsetLeft < rect.left || wrapper.offsetLeft + wrapper.offsetWidth > rect.right) {

                {
                  // @ts-ignore
                  if (m.clientX - 40 > rect.left && m.clientX +40 < rect.right) {
                    return true;
                  } else {
                    return false;
                  }
                }
              } else {
                return true;
              }
            }),
            takeUntil(mouseUp)
          )),
        concatAll()
      );

    source.pipe(
      withLatestFrom(mouseDown, (move, down) => {
        return {
          // @ts-ignore
          x: validValue(move.clientX - down.offsetX, window.innerWidth - wrapper.getBoundingClientRect().width, 0),
          // @ts-ignore
          y: validValue(move.clientY - down.offsetY, window.innerHeight - wrapper.getBoundingClientRect().height, 0)
        };
      })
    ).subscribe(pos => {
      // console.log('pos :>> ', pos);
      wrapper.style.left = pos.x + 'px';
      wrapper.style.top = pos.y + 'px';
      column.style.width = memo.y - pos.y + 'px';
      const angle = -this.calAngle(memo.x, memo.y, pos.x, pos.y) - 90;

      column.style.transform = `rotate(${angle}deg)`;
    });
    mouseUp.subscribe(() => {
      wrapper.style.left = memo.x + 'px';
      wrapper.style.top = memo.y + 'px';

    });
  }
  /**
   * 计算两点角度
   * @param ex 起点 x
   * @param ey 起点 y
   * @param cx 终点 x
   * @param cy 终点 y
   */

  calAngle(ex, ey, cx, cy) {
    // console.log('(', ex, ',', ey, ')(', cx, ',', cy, ')');
    const dx = cx - ex;
    const dy = cy - ey;
    let result = Math.atan2(dx, dy);
    result *= 180 / Math.PI;
    return result;
  }

}
