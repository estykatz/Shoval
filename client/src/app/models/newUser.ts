

export class NewUser {
  password: string;
  userName: string;
  userAdmin: number;
  email: string;

  constructor(pd?: string, user?: string, admin?: number, em?: string) {
    this.password = pd;
    this.userName = name;
    this.userAdmin = admin;
    this.email = em;
  }
}
