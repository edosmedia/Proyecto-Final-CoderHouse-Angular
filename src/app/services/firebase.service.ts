import { observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Student } from '../models/student.model';
import { Observable } from '@firebase/util';
import { Subject } from '../models/subject.model';
import { Matriculados } from '../models/matriculados.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(private firestore: Firestore) { }
  getMatriculados() {
    const studentRef = collection(this.firestore, 'matriculados')
    return collectionData(studentRef, { idField: 'id' }) as unknown as  Observable<any>
  }
  // Crear Alumnos
  postStundents(student: Student) {
    const studentRef = collection(this.firestore, 'alumnos')
    return addDoc(studentRef, student)
  }
  // Eliminar Alumnos
   deleteStundents(student: Student) {
   const studenDoctRef = doc(this.firestore, `alumnos/${student.id}`);
     return deleteDoc(studenDoctRef)
  }
  editStundents(student: Student) {
    const studenDoctRef = doc(this.firestore, `alumnos/${student.id}`);
    return updateDoc(studenDoctRef,{student} )
  }
  // Obtener Alumnos
  getStundents() {
    const studentRef = collection(this.firestore, 'alumnos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }
  // Obtener Cursos
  getSubjects(): Observable<Subject[]> {
    const studentRef = collection(this.firestore, 'cursos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Subject[]>
  }
  // Obtener Usuarios
  getUsers(): Observable<Student[]> {
    const studentRef = collection(this.firestore, 'usuarios')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }


}
