export class User {
  public id: string = undefined;
  public value: string = undefined;
  public name: string = undefined;
  public description: string = undefined;
  static selectId: (item: User) => string = item => item.id;
}
