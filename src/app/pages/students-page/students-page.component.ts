import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {


  students: Student[]

  displayedColumns = [
    'imageAvatar',
    'firstName',
    'lastName',
    'isActive',
    'edit',
    'delete',
  ];

  constructor(private readonly dialogService: MatDialog, private firebaseservice: FirebaseService) {

    this.firebaseservice.getStundents().subscribe(dataApi => {
      this.students = dataApi;
      console.log(this.students)

    })
  }
  ngOnInit(): void {

  }



  addStudent(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titulo: 'Agregar Nuevo Estudiante',
    };
    const dialog = this.dialogService.open(
      StudentDialogComponent,
      dialogConfig
    ); // Para Abrir un Dialog
    // console.log(StudentDialogComponent.instance)
    dialog.afterClosed().subscribe((value) => {
      let student = {
        imageAvatar: value.imageAvatar || '../../../assets/image/avatar.png',
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        country: value.country || "",
        city: value.city || "",
        address: value.address,
        state: value.state,
      };

      value = student

      console.log(value + "punto inter")
      if (value) {
        console.log(value, "  Enviando a Firebase")
        this.firebaseservice.postStundents(value)

      }
    });
  }

  async removeStudent(student: Student) {
    // Si el ID = 1

    const res = await this.firebaseservice.deleteStundents(student)
    console.log(res)
    // this.students = this.students.filter(
    //   (stu) => stu.id !== student.id // Deja todo los Elementos menos el que se esta buscando donde se cumpla la condicion
    // );
  }

  editStudent(student: Student) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titulo: 'Editar Estudiante',
      imageAvatar: student.imageAvatar || '../../../assets/image/avatar.png',
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      city: student.city,
      country: student.country,
      address: student.address,
      state: student.state
    };
    console.log(student.state + "con")
    dialogConfig.width = '960px';
    const dialog = this.dialogService.open(
      StudentDialogComponent,
      dialogConfig
    ); // Para Abrir un Dialog

    dialog.afterClosed().subscribe((data) => {
      // console.log(data)
      if (data) {
        this.students = this.students.map((stun) =>
          stun.id === student.id ? { ...stun, ...data } : stun,

        );
        console.log(data, this.students, + " dentro de la condicion")
        this.firebaseservice.editStundents(data, data.id)
        console.log(this.firebaseservice.editStundents(data, student.id))

        // const temp = this.students.map((stun) => stun.id === student.id ? { ...stun, ...data } : stun);
        // console.log(temp);
      }
    });
  }
}


