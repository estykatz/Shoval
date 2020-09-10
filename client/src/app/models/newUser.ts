

export class NewUser {
  password: string;
  userName: string;
  userAdmin: boolean;
  email: string;

  constructor(pd?: string, user?: string, admin?: boolean, em?: string) {
    this.password = pd;
    this.userName = name;
    this.userAdmin = admin;
    this.email = em;
  }
}
