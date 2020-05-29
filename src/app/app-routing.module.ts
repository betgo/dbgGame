import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './battle';
import { HtmlTreeComponent } from './map/componets';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/battle/view' },
  { path: 'battle/view', pathMatch: 'full', component: ViewComponent},
  { path: 'map', pathMatch: 'full', component: HtmlTreeComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
