import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentsPageComponent
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
