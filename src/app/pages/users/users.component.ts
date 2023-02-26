import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Users } from 'src/app/models/users.model';
import { FirebaseService } from '../../services/firebase.service';
import { SubjectDialogComponent } from '../../shared/components/subject-dialog/subject-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users : Users[];
  displayedColumns = [
    'name',
    'email',
    'edit',
    'delete',

  ];
  constructor(private readonly dialogService: MatDialog, private firebaseservice: FirebaseService){
    this.firebaseservice.getUsers().subscribe( c =>
      this.users = c
      )
  }

  addSubject(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data =  {
      titulo: 'Agregar Nuevo Curso'
    };
    const dialog = this.dialogService.open(
      SubjectDialogComponent,
      dialogConfig
    )
    dialog.afterClosed().subscribe((value) => {
      let subject = {

      }
    })
  }

}
