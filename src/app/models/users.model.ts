export class Users {
 titulo: string;
 constructor(
  public id: string,
  public firstname: string,
  public lastname: string,
  public username: string,
  public password: string,
  public email: string,
  public state: boolean,
 ){}

}
