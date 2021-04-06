let p=require('path')
let fs=require('fs')
//const{runInNewContext}=require('vm')
//const { json } = require('body-parser')

module.export=function(){
  // this.friendsPath=p/join(__dirname,'...data/friends.json')
this.getList=()=>{
    let data=fs.readFileSync(this.friendsPath);
   return json.pars(data)
}
this.addFriend=f=>
letdata=this.getList();
data.push(f)
fs.writeFileSync(this.friendsPath,jsom.stringify(data))
}
