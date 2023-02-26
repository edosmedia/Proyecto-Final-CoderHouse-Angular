import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubjectDialogComponent } from './components/subject-dialog/subject-dialog.component';

@NgModule({
  declarations: [
    StudentDialogComponent,
    SubjectDialogComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  exports: [
    AngularMaterialModule,
    StudentDialogComponent,
    ReactiveFormsModule,
    LayoutModule],
})
export class SharedModule {}
