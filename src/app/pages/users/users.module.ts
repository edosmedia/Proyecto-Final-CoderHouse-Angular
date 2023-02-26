import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

console.log('Users module loaded');

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule  {

  ngOnInit() {
    console.log('Users2 module loaded');
  }
}
