import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightPanelComponent } from './right-panel/right-panel.component';

const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: RightPanelComponent },
  { path: 'second', component: RightPanelComponent },
  { path: 'third', component: RightPanelComponent },
  { path: 'fourth', component: RightPanelComponent },
  { path: 'fifth', component: RightPanelComponent },
  { path: 'sixth', component: RightPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
