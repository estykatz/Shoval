export class Registratio {
  identity: number;
  stLastName: string;
  stFirstName: string;
  phone: string;
  PlaceOfStudy: string;
  SwimmingLevels: number; // אני לא יודעת מאיזה טיפוס כדאי לעשות אותו
  Debt: number; // טיפוס number מביא מספרים מדיוקים גם אחרי הנקודה?
  Discount: boolean;
  Remarks: string;


  constructor(id?: number, stLast?: string, stFirst?: string, ph?: string, plas?: string, swimming?: number,
              debt?: number, discount?: boolean, remarks?: string) {
    this.identity = id;
    this.stLastName = stLast;
    this.stFirstName = stLast;
    this.phone = ph;
    this.PlaceOfStudy = plas;
    this.SwimmingLevels = swimming;
    this.Debt = debt;
    this.Discount = discount;
    this.Remarks = remarks;
  }

}
