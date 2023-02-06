import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { state } from '@angular/animations';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-dialog',
  templateUrl: './subject-dialog.component.html',
  styleUrls: ['./subject-dialog.component.scss']
})
export class SubjectDialogComponent implements OnInit {


  titulo: string;
  nameControl = new FormControl('');
  descriptionControl = new FormControl('');
  priceControl = new FormControl();
  start_dateControl = new FormControl();
  end_dateControl = new FormControl();
  stateControl = new FormControl();

  subjectForm = new FormGroup({
    name: this.nameControl,
    description: this.descriptionControl,
    price: this.priceControl,
    start_date: this.start_dateControl,
    end_date: this.end_dateControl,
    state: this.stateControl,
  })

  constructor(private readonly dialogRef: MatDialogRef<SubjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Subject | undefined) {

    this.titulo =  data!.titulo;
    if(data) {
      this.subjectForm.patchValue(data)
    }
  }

  close(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
    this.stateControl.get('state')?.setValue(false)


    console.log(this.stateControl.value + " Testing Estado")
  }


}
