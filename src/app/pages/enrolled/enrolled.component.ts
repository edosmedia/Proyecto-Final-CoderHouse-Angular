import { Component, OnInit } from '@angular/core';
import { Matriculados } from 'src/app/models/matriculados.model';
import { FirebaseService } from '../../services/firebase.service';

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
        const insertando = async () => {
          await this.matriculados.push(nuevoMatriculado)
        }
        insertando()
        console.log(nuevoMatriculado)

      })
    });
    console.log(this.matriculados)
  }
  }



