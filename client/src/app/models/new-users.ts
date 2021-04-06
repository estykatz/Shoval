export class NewUsers {
    password: string;
    userName: string;
    userAdmin: number;
    email: string;
  
    constructor(pd?: string, name?: string, admin?: number, em?: string) {
      this.password = pd;
      this.userName = name;
      this.userAdmin = admin;
      this.email = em;
    }

}
