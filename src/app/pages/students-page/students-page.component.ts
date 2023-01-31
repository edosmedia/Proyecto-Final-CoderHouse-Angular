import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from '../../models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';
import { StudentsService } from '../../services/students.service';
import { state } from '@angular/animations';
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

  constructor(private readonly dialogService: MatDialog, private studentService: StudentsService, private firebaseservice: FirebaseService) {

    this.firebaseservice.getStundents().subscribe(dataApi => {
      this.students = dataApi;

    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
        city: value.city || "",
        country: value.country || "",
        address: value.address || "",
        state: value.state
      };

      value = student
      if (value) {
        // const lastId = this.students[this.students.length - 1]?.id;
        console.log(value + "Funcion de add");

        console.log(value, "   valores")
        this.firebaseservice.postStundents(value)
        // this.students.push(new Student(lastId + 1, value.firstName, value.lastName, true ))
        // this.students = [
        //   ...this.students,
        //   new Student(lastId + 1, value.firstName, value.lastName, "", value.email, value.city ||
        //     "", value.country || "", value.address || "", value.state),
        // ];

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
      andress: student.address,
      state: student.state
    };
    console.log(student.state + "con")
    dialogConfig.width = '500px';
    const dialog = this.dialogService.open(
      StudentDialogComponent,
      dialogConfig
    ); // Para Abrir un Dialog

    dialog.afterClosed().subscribe((data) => {
      console.log(data)
      if (data) {
        this.firebaseservice.postStundents(data)
        console.log(data.state, + " dentro de la condicion")
        this.students = this.students.map((stun) =>
          stun.id === student.id ? { ...stun, ...data } : stun,

        );
        // const temp = this.students.map((stun) => stun.id === student.id ? { ...stun, ...data } : stun);
        // console.log(temp);
      }
    });
  }
}


