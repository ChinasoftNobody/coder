import {Component} from '@angular/core';
import {CheckTaskModel} from '../../../data/check-task.model';
import {debug} from 'util';

@Component({
  selector: 'app-code-lib',
  templateUrl: './code-check.component.html',
  styleUrls: ['./code-check.component.css']
})
export class CodeCheckComponent {
  search: '';
  tableData: CheckTaskModel[] = [{
    name: 'CoderPortalCheck',
    description: 'CoderPortal',
    type: 'Tslint',
    author: 'Maysham',
    createdOn: new Date().getTime()
  }, {
    name: 'CoderService',
    description: 'CoderService',
    type: 'Checkstyle',
    author: 'Maysham',
    createdOn: new Date().getTime()
  }];

  handle(scope) {
    debugger;
  }
}
