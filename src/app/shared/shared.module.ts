import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrogDirective } from './Directive';

// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
const THIRDMODULES = [
  NgZorroAntdModule,
];
// #endregion

@NgModule({
  declarations: [DrogDirective],
  exports: [
    DrogDirective,
    // third libs
    ...THIRDMODULES,],
  imports: [
    CommonModule,
    // third libs
    ...THIRDMODULES,
  ]
})
export class SharedModule { }
