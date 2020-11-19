import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlTreeComponent } from './componets';
import { TreeNodeComponent } from './componets';
import { HtmlCanvasComponent } from './componets/html-canvas/html-canvas.component';



@NgModule({
  declarations: [HtmlTreeComponent, TreeNodeComponent, HtmlCanvasComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
