import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrogDirective } from './Directive';

@NgModule({
  declarations: [DrogDirective],
  exports: [DrogDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
