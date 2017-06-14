export class Greeter {
  private _name: string;

  constructor(name?: string) {
    this._name = name || 'people';
  }

  public sayHello(): string {
    return `Hello ${this._name}`;
  }
}