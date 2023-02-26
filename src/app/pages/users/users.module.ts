import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  }
]


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
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
