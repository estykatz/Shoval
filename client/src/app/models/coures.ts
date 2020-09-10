export class Coures{
    price:number
    DateStart:Date
    DateFinish:Date
    Day:Date
    Hour:Date//אין טיפוס טיים?


    constructor(price:number,start:Date,finish:Date,day:Date){
        this.price=price;
        this.DateStart=start;
this.DateFinish=finish;
this.Day=day
    }
}