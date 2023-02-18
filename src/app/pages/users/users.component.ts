import { Component } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { FirebaseService } from '../../services/firebase.service';

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
  constructor(private firebaseservice: FirebaseService){
    this.firebaseservice.getUsers().subscribe( c =>
      this.users = c
      )
  }
}
