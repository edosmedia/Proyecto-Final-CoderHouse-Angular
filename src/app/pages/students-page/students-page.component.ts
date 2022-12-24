import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';

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
]

  constructor() {}

  ngOnInit(): void {}
}
