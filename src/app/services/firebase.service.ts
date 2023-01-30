import { observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Student } from '../models/student.model';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private firestore: Firestore) { }
  // Obtener Alumnos
  getStundents() {
    const studentRef = collection(this.firestore, 'alumnos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }
  // Obtener Cursos
  getSubjects(): Observable<Student[]> {
    const studentRef = collection(this.firestore, 'cursos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }
  // Obtener Usuarios
  getUsers(): Observable<Student[]> {
    const studentRef = collection(this.firestore, 'usuarios')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }

}
