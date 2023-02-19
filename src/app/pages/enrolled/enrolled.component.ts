import { Component, OnInit } from '@angular/core';
import { Matriculados } from 'src/app/models/matriculados.model';
import { FirebaseService } from '../../services/firebase.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.scss']
})
export class EnrolledComponent implements OnInit {
  matriculados: Matriculados[] = [];

  displayedColumns = [
    'id',
    'name',
    'cursos',
    // 'edit',
    // 'delete',

  ];
  constructor(private firebaseservice: FirebaseService) {


  }
  ngOnInit(): void {

    this.firebaseservice.getMatriculados().subscribe(matriculas => {
      matriculas.forEach((matricula: any) => {
        const alumnos = matricula.alumno // Alumnos
        const idmatriculado = matricula.id // ID de la Matricula
        const statematriculado = matricula.state // Estado de la Matricula
        const curso = matricula.cursos // GET Cursos Matriculados x Alumno
        const nombresCursosM: any[] = []; // Array de Cursos por Alumno


        // Obtengo el Nombre de los Cursos Matriculados
        let getNombreCursos = async (curso: any) => {

          await Promise.all(curso.map(async (element: any) => {
            let cursoid = element.id;
            const resultado = await this.firebaseservice.getCursoById(cursoid).then(n => n.name);
            // console.log(resultado); // Aquí se mostrará el valor de resultado
            nombresCursosM.push(resultado); // aqui lo inserto en un array
            // nuevoMatriculado.cursos = nombresCursosM.push(resultado);
          }));
          return nombresCursosM;
        };

        getNombreCursos(curso)


        //   Obteniendo los Nombre de los alumnos

        // Obtengo el Nombre de los Cursos Matriculados

        // opcion 1
        // let getNombreAlumnos = async (alumnos: any) => {
        //   // console.log(alumnos.id)

        //   const nameCompleted = await this.firebaseservice.getAlumnoById(alumnos.id).then(element => {
        //     return `${element.firstName} ${element.lastName}`
        //   })
        //   // console.log(nameCompleted)
        //   nombresAlumnoM = nameCompleted

        //   return nombresAlumnoM
        // };

        // opcion 2
        let getNombreAlumnos = async (alumnos: any) => {
          const element = await this.firebaseservice.getAlumnoById(alumnos.id);
          const nameCompleted = `${element.firstName} ${element.lastName}`;
          nuevoMatriculado.name = nameCompleted
        };

        getNombreAlumnos(alumnos)


        // console.log(nombresAlumnoM)


        const nuevoMatriculado = {
          name: '',
          titulo: '',
          id: idmatriculado,
          cursos: nombresCursosM,
          state: statematriculado
        };

        // Insertamos al nuevo Objecto
        this.matriculados.push(nuevoMatriculado)

        console.log(nuevoMatriculado)


        // this.firebaseservice.getAlumnoById(idalumnos).then(m => {
        //   const Alumno = m;
        //   const nombrecompleto = Alumno.firstName + " " + Alumno.lastName;
        //   const nuevoMatriculado = {
        //     name: nombrecompleto,
        //     titulo: '',
        //     id: idmatriculado,
        //     cursos: [],
        //     state: statematriculado
        //   };
        //   this.matriculados.push(nuevoMatriculado);
        //   // console.log(nuevoMatriculado);
        //   // console.log(Alumno);

        // }).catch(error => {
        //   console.log('Error al obtener el alumno con id ' + matricula.id + ': ' + error);
        // });
      })
    });
    console.log(this.matriculados)
  }
  }



