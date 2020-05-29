import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlTreeComponent } from './componets';
import { TreeNodeComponent } from './componets';



@NgModule({
  declarations: [HtmlTreeComponent, TreeNodeComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
