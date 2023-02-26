import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentsPageComponent,
  }
]


@NgModule({
  declarations: [
    StudentsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    StudentsPageComponent
  ]

})
export class StudentsModule {


}
