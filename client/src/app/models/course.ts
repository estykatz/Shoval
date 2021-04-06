export class Course {

  id: number;
  studentId: number;
  levelId: number;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  day: string;
  hour: string;

  constructor(id?: number, studentId?: number, levelId?: number, fn?: string, ln?: string, phone?: string, day?: string, hour?: string) {
    this.id = id;
    this.studentId = studentId;
    this.levelId = levelId;
    this.FirstName = fn;
    this.LastName = ln;
    this.PhoneNumber = phone;
    this.day = day;
    this.hour = hour;
  }
}
