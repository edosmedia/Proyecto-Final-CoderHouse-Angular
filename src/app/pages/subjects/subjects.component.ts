import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'src/app/models/subject.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SubjectDialogComponent } from '../../shared/components/subject-dialog/subject-dialog.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects : Subject[]

  displayedColumns = [
    'name',
    'description',
    'price',
    'edit',
    'delete',

  ];

  constructor(private readonly dialogService : MatDialog, private firebaseservice : FirebaseService) {
    this.firebaseservice.getSubjects().subscribe(dataApi => {
      this.subjects = dataApi;
      console.log(this.subjects)
    })
  }

  addSubject() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titulo: 'Agregar Nuevo Curso',
    };
    dialogConfig.width = '960px';
    const dialog = this.dialogService.open(
      SubjectDialogComponent,
      dialogConfig
    );
      dialog.afterClosed().subscribe((value) => {

        let subject = {
          name: value.name,
          description: value.description,
          price: value.price,
          start_date: value.start_date,
          end_date: value.end_date,
          state: value.state
        };

        value = subject

        if(value) {
          console.log(value, " Envio a Firebase")
          this.firebaseservice.postSubject(value)
        }
      })

  }



  ngOnInit(): void {
  }

}
