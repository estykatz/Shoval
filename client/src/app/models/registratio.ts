export class Registratio {
  studentId: string;
  Lastname: string;
  FirstName: string;
  PhoneNumber: string;
  PlaceOfStudy: string;
  SwimmingLevels: string; // אני לא יודעת מאיזה טיפוס כדאי לעשות אותו
  Debt: number; // טיפוס number מביא מספרים מדיוקים גם אחרי הנקודה?
  Discount: boolean;
  BoyOrGirl:number;
  Remarks: string;


  constructor(id?: string, stLast?: string, stFirst?: string, ph?: string, plas?: string, swimming?: string,
<<<<<<< HEAD
              debt?: number, discount?: boolean,boyorgirl?:number, remarks?: string) {
=======
              debt?: number, discount?: boolean, remarks?: string) {
>>>>>>> ef2a27cdebee9d76209ecc114d64bd4ee37ba31f
    this.studentId = id;
    this.Lastname = stLast;
    this.FirstName = stFirst;
    this.PhoneNumber = ph;
    this.PlaceOfStudy = plas;
    this.SwimmingLevels = swimming;
    this.Debt = debt;
    this.Discount = discount;
    this.BoyOrGirl=boyorgirl;
    this.Remarks = remarks;
  }

}
