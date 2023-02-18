import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrolledComponent } from './enrolled.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    EnrolledComponent
  ]
})
export class EnrolledModule { }
