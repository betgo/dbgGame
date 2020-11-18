import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './componets';
import { ProductModule } from '../product';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    SharedModule,
  ],
  exports: [
    ViewComponent,
  ]
})
export class BattleModule { }
