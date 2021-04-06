import {Registratio} from './registratio';
export class NewGroup {
  levelId: number;
  girls: Array<Registratio>;
  boys: Array<Registratio>;

  constructor(levelId?: number, girls?: Array<Registratio>, boys?: Array<Registratio>) {
    this.levelId = levelId;
    this.girls = girls;
    this.boys = boys;
  }
}
