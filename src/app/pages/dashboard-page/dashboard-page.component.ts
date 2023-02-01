import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private FirebaseService: FirebaseService ) { }

  ngOnInit(): void {
    this.FirebaseService.getMatriculados().subscribe(matriculados => {
      console.log(matriculados)
    })

    // this.FirebaseService.getUsers().subscribe(student => {
    //   console.log(student)
    // })
  }

}
