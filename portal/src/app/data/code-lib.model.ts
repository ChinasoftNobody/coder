import {BaseModel} from './base.model';

export class CodeLibModel extends BaseModel {
  name?: string;
  description?: string;
  type ?= 'github';
  url?: string;
}
