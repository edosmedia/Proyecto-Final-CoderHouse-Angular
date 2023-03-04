
import { Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, addDoc, deleteDoc, doc, updateDoc, getFirestore, where, query, getDocs, getDoc } from '@angular/fire/firestore';
import { Student } from '../models/student.model';
import { Subject } from '../models/subject.model';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db = this.firestore;
  constructor(private firestore: Firestore) { }
  // -----------------------------------------------------------------------------------------------//
  // Stundent Working
  // Obtener Alumnos
  getStundents() {
    const studentRef = collection(this.firestore, 'alumnos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Student[]>
  }

  async getAlumnoById(id: string): Promise<any> {
    const alumnoRef = doc(collection(this.firestore, 'alumnos'), id);
    const alumnoSnap = await getDoc(alumnoRef);
    if (alumnoSnap.exists()) {
      return { id: alumnoSnap.id, ...alumnoSnap.data() };
    } else {
      return null;
    }
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
  // Editar Alumnos (Woking)
  async editStundents(student: any, id: any) {
    const studenDoctRef = doc(this.db, 'alumnos', id);
    console.log(studenDoctRef + "registro")
    await updateDoc(studenDoctRef, {
      imageAvatar: student.imageAvatar,
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      city: student.city,
      country: student.country,
      address: student.address,
      state: student.state
    })

  }
  // -----------------------------------------------------------------------------------------------//


  //EnrolledComponent Working
  // Obtener Matriculados
  getMatriculados() {
    const studentRef = collection(this.firestore, 'matriculados')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<any>
  }

  // -----------------------------------------------------------------------------------------------//

  // SubjectsComponent
  // Obtener Cursos
  getSubjects(): Observable<Subject[]> {
    const studentRef = collection(this.firestore, 'cursos')
    return collectionData(studentRef, { idField: 'id' }) as unknown as Observable<Subject[]>
  }

  async getCursoById(id: string): Promise<any> {
    const cursoRef = doc(collection(this.firestore, 'cursos'), id);
    const cursoSnap = await getDoc(cursoRef);
    if (cursoSnap.exists()) {
      return { id: cursoSnap.id, ...cursoSnap.data() };
    } else {
      return null;
    }
  }
   // Agregar Curso
  postSubject(subject: Subject) {
    const subjectRef = collection(this.firestore, 'cursos')
    return addDoc(subjectRef, subject)
  }

 // Eliminar Curso
  deleteSubject(value: Subject) {
    const subjectDoctRef = doc(this.firestore, `cursos/${value.id}`);
    return deleteDoc(subjectDoctRef)
  }

  async editSubject(subject: any, id: any) {
    console.log(subject, "registro para firebase")
    const subjectDoctRef = doc(this.firestore, 'cursos', id);
    console.log(subjectDoctRef + "registro")
    await updateDoc(subjectDoctRef, {
      name: subject.name,
      description: subject.description,
      price: subject.price,
      start_date : subject.start_date,
      end_date : subject.end_date,
      state: subject.state
    })


  }

  // -----------------------------------------------------------------------------------------------//

  // Users Component
  // Obtener Usuarios
  getUsers(): Observable<Users[]> {
    const usersRef = collection(this.firestore, 'usuarios')
    return collectionData(usersRef, { idField: 'id' }) as unknown as Observable<Users[]>
  }










}
