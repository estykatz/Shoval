export class User{
  password: string;
  userName: string;

  constructor(pd?: string, name?: string) {
    this.password = pd;
    this.userName = name;
  }
}

