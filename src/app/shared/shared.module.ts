import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    StudentDialogComponent
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
    LayoutModule],
})
export class SharedModule {}
