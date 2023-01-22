export class Student {
  titulo: string;
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public city: string,
    public country: string,
    public andress: string,
    public imageAvatar: string,
    public state: boolean
  ){}
}
