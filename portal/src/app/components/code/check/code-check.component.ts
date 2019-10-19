import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {CheckTaskModel} from '../../../data/check-task.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {Validators} from '../../../common/validators';

@Component({
  selector: 'app-code-lib',
  templateUrl: './code-check.component.html',
  styleUrls: ['./code-check.component.css']
})
export class CodeCheckComponent implements OnInit {

  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {
  }

  search: '';
  tableData: CheckTaskModel[] = [{
    name: 'CoderPortalCheck',
    description: 'CoderPortal',
    type: 'jenkins',
    module: 'TsLint',
    author: 'Maysham',
    url: 'http://localhost:9090/job/test/configure',
    createdOn: new Date().getTime()
  }, {
    name: 'CoderService',
    description: 'CoderService',
    type: 'jenkins',
    module: 'Checkstyle',
    author: 'Maysham',
    url: 'http://localhost:9090/job/test/configure',
    createdOn: new Date().getTime()
  }];
  createdTask: CheckTaskModel = {type: 'jenkins'};
  validateForm: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      name: ['', [Validators.nameValidator]],
      description: ['', [Validators.descriptionValidator]],
      type: ['jenkins', [Validators.descriptionValidator]],
      module: ['', [Validators.descriptionValidator]]
    });
  }

  submit(): void {
    console.log(this.validateForm.value);
    console.log(this.createdTask);
  }

  reset(): void {
    this.validateForm.reset();
  }

  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item];
  }

  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('nameErr') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.validateForm.controls[item];
    return control.dirty && control.hasError('descriptionErr') ? control.errors.message : '';
  }

  handle(checkTask: CheckTaskModel) {
    window.open(checkTask.url);
  }

  exec(rowData: any) {
    window.open('http://localhost:9090/job/test/build?delay=0sec');
  }
}
