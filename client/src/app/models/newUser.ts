import { publicDecrypt } from "crypto"

export class NewUser{
Id:number
password:string
userName:string
userAdmin:boolean
email:string



constructor (id:number,pd:string,user:string,admin:boolean,em:string)
{
this.Id=id;
this.password=pd;
this.userName=name;
this.userAdmin=admin;
this.email=em;
}
}