import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Student } from '../../models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students: Student[] = [
    new Student(1, 'Marvelys', 'Medrano', true),
    new Student(2, 'Eduardo', 'Medrano', true),
    new Student(3, 'Laura', 'Piedra', true),
    new Student(4, 'Cesar', 'Ali', false),
    new Student(5, 'David', 'Badell', true),
    new Student(6, 'Robert', 'Ramos', false),
    new Student(7, 'German', 'Rosa', true),
    new Student(8, 'Luis', 'Medrano', true),
    new Student(9, 'Miguel', 'Medrano', true),
    new Student(10, 'Dessire', 'Rosa', false),
  ];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'isActive',
    'edit',
    'delete',
  ];

  constructor(private readonly dialogService: MatDialog) {}


  addStudent() {
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
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        console.log(this.students);
        // this.students.push(new Student(lastId + 1, value.firstName, value.lastName, true ))
        this.students = [
          ...this.students,
          new Student(lastId + 1, value.firstName, value.lastName, true),
        ];
      }
    });
  }

  removeStudent(student: Student) {
    // Si el ID = 1
    this.students = this.students.filter(
      (stu) => stu.id !== student.id // Deja todo los Elementos menos el que se esta buscando donde se cumpla la condicion
    );
  }

  editStudent(student: Student) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      titulo: 'Editar Estudiante',
      firstName: student.firstName,
      lastName: student.lastName,
    };
    dialogConfig.width = '500px';
    const dialog = this.dialogService.open(
      StudentDialogComponent,
      dialogConfig
    ); // Para Abrir un Dialog

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        // console.log(data)
        this.students = this.students.map((stun) =>
          stun.id === student.id ? { ...stun, ...data } : stun
        );
        // const temp = this.students.map((stun) => stun.id === student.id ? { ...stun, ...data } : stun);
        // console.log(temp);
      }
    });
  }

  ngOnInit(): void {}
}
