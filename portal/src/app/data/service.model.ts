import {BaseModel} from './base.model';

export class ServiceModel extends BaseModel{
  name?: string;
  type?: string;
  description?: string;
  url?: string;
}
