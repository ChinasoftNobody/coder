import {Component} from '@angular/core';
import {ServiceModel} from '../../../data/service.model';

@Component({
  selector: 'app-code-lib',
  templateUrl: './code-lib.component.html',
  styleUrls: ['./code-lib.component.css']
})
export class CodeLibComponent {
  search: '';
  tableData: ServiceModel[] = [{
    name: 'CoderPortal',
    type: 'github',
    description: 'CoderPortal',
    url: 'https://github.com/ChinasoftNobody/coder.git',
    author: 'Maysham',
    createdOn: new Date().getTime()
  }, {
    name: 'CoderService',
    type: 'github',
    description: 'CoderService',
    url: 'https://github.com/ChinasoftNobody/coder.git',
    author: 'Maysham',
    createdOn: new Date().getTime()
  }];
}
