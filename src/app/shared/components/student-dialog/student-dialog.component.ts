import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [],
})
export class StudentDialogComponent implements OnInit {
  firstNameControl = new FormControl('');
  lastNameControl = new FormControl('');
  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });
  constructor(
    private readonly dialogRef: MatDialogRef<StudentDialogComponent>
  ) {}

  close() {
    this.dialogRef.close('hola');
  }

  save(){
    
  }


  ngOnInit(): void {}
}
