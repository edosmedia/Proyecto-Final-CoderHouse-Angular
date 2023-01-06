import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [],
})
export class StudentDialogComponent implements OnInit {
  titulo: string;
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  constructor(
    private readonly dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student | undefined
  ) {
    this.titulo = data!.titulo;
    if (data) {
      this.studentForm.patchValue(data);
    }
    console.log(data);
  }

  close() {
    this.dialogRef.close();
  }

  save() {}

  ngOnInit(): void {}
}
