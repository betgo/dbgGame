import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './battle';
import { HtmlTreeComponent } from './map/componets';
import { HtmlCanvasComponent } from './map/componets/html-canvas/html-canvas.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/battle/view' },
  { path: 'battle/view', pathMatch: 'full', component: ViewComponent},
  { path: 'map', pathMatch: 'full', component: HtmlCanvasComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
