import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolledComponent } from './enrolled.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EnrolledComponent
  }
];

@NgModule({
  declarations: [
    EnrolledComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    EnrolledComponent
  ]
})
export class EnrolledModule { }
