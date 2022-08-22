import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CritizenIdComponent } from './critizen-id.component';


const routes: Routes = [
  { path: '', component: CritizenIdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CritizenIdRoutingModule { }