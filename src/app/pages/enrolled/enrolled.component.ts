import { Component } from '@angular/core';
import { Matriculados } from 'src/app/models/matriculados.model';
import { FirebaseService } from '../../services/firebase.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.scss']
})
export class EnrolledComponent {
  matriculados: Matriculados[] = [];

  constructor(private firebaseservice: FirebaseService) {
    this.firebaseservice.getMatriculados().subscribe(matriculas => {
      matriculas.forEach((matricula: any) => {
        const idalumnos = matricula.alumno.id
        const idmatriculado = matricula.id
        const statematriculado = matricula.state
        const curso  = matricula.cursos

        let getNombreCursos = (curso: any) => {
          curso.forEach((element: any) => {
            // console.log(element.id)
            let cursoid = element.id
            let resultado;
            this.firebaseservice.getCursoById(cursoid).then( n => {
               resultado = n.name
              console.log(resultado)
            })
            console.log(resultado)
          });
        }
        console.log(getNombreCursos(curso))


        this.firebaseservice.getAlumnoById(idalumnos).then(m => {
          const Alumno = m;
          const nombrecompleto = Alumno.firstName + " " + Alumno.lastName;
          const nuevoMatriculado = {
            name: nombrecompleto,
            titulo: '',
            id: idmatriculado,
            cursos: [],
            state: statematriculado
          };
          this.matriculados.push(nuevoMatriculado);
          // console.log(nuevoMatriculado);
          // console.log(Alumno);

        }


        ).catch(error => {
          console.log('Error al obtener el alumno con id ' + matricula.id + ': ' + error);
        });
      })
    });
    console.log(this.matriculados)
  }
}
