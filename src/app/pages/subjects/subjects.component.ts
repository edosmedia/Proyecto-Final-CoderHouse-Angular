import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { FirebaseService } from 'src/app/services/firebase.service';

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

  constructor(private firebaseservice : FirebaseService) {


    this.firebaseservice.getSubjects().subscribe(dataApi => {
      this.subjects = dataApi;
      console.log(this.subjects)
    })


  }




  ngOnInit(): void {
  }

}
