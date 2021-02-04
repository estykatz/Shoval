
export class Attendance {

  identity: string;
  HMO: number; // זה גם אמור להיות בםצנעו
  TransferDate: Date;

  constructor(id?: string, hmo?: number, trans?: Date) {
    this.identity = id;
    this.HMO = hmo;
    this.TransferDate = trans;
  }
}
