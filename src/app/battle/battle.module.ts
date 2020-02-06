import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './componets';
import { ProductModule } from '../product';

@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
  ],
  exports: [
    ViewComponent,
  ]
})
export class BattleModule { }
