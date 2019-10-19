import {BaseModel} from './base.model';

export class CheckTaskModel extends BaseModel {
  name?: string;
  description?: string;
  type?:string;
}
