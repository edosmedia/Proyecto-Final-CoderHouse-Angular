export class Subject {
  titulo: string;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public start_date: string,
    public end_date: string,
    public state: boolean
  ){}
}
