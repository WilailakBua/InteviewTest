import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriangleComponent } from './triangle.component';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes: Routes = [
  { path: '', component: TriangleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class TriangleRoutingModule { }
