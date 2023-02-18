import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CleanLayoutComponent } from './clean-layout/clean-layout.component';
import { LoginModule } from '../pages/login-page/login.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    CleanLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    LoginModule,
  ],

})
export class LayoutsModule { }
