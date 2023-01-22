import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    SubjectsComponent
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
