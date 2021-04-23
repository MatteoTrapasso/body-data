export class User {
  public id: string = undefined;
  public name: string = undefined;
  public surname: string = undefined;
  public email: string = undefined;
  public gender: string = undefined;
  public description: string = undefined;
  static selectId: (item: User) => string = item => item.id;
}
