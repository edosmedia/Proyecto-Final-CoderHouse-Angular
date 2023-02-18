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
import { StudentsModule } from './students-page/students.module';
import { SubjectsModule } from './subjects/subjects.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login-page/login.module';
import { EnrolledModule } from './enrolled/enrolled.module';



@NgModule({
  declarations: [
    DashboardPageComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
     StudentsModule,
     SubjectsModule,
     EnrolledModule,
     LoginModule,
     UsersModule,
     SharedModule,
     HttpClientModule
    ],
  exports: [

  ],
})
export class PagesModule {}
