import { ArrayType } from "@angular/compiler";

export class Matriculados {
  titulo: string;
  constructor(
    public id: number,
    public name: any,
    public cursos: any,
    public state: boolean
  ){}
}
