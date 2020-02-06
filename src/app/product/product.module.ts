import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './componets/card/card.component';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { MonsterComponent } from './componets/monster/monster.component';

@NgModule({
  declarations: [
    CardComponent,
    MonsterComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    CardComponent,
    MonsterComponent,
    DragDropModule,
  ]
})
export class ProductModule { }
