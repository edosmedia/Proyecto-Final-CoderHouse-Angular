import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    SubjectsComponent,
    LoginPageComponent,
    DashboardPageComponent,
    ContactsComponent,
    UsersComponent
  ],
  imports: [
     CommonModule,
     SharedModule,
     HttpClientModule
    ],
  exports: [
    StudentsPageComponent
  ],
})
export class PagesModule {}
