import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {ServiceModel} from '../../../data/service.model';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '../../../common/validators';
import {CodeLibModel} from '../../../data/code-lib.model';

@Component({
  selector: 'app-code-lib',
  templateUrl: './code-lib.component.html',
  styleUrls: ['./code-lib.component.css']
})
export class CodeLibComponent implements OnInit {
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
  codeLibForm: FormGroup;
  createCodeLib: CodeLibModel = {};
  showDialog: boolean;

  constructor(@Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.codeLibForm = this.formBuilder.group({
      name: ['', [Validators.nameValidator]],
      description: ['', [Validators.descriptionValidator]],
      type: ['github', [Validators.descriptionValidator]],
      url: ['', [Validators.descriptionValidator]]
    });
  }

  statusCtrl(item: string): string {
    if (!this.codeLibForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.codeLibForm.controls[item];
    return control.dirty && control.hasError('nameErr') ? control.errors.status : '';
  }

  messageCtrl(item: string): string {
    if (!this.codeLibForm.controls[item]) {
      return;
    }
    const control: AbstractControl = this.codeLibForm.controls[item];
    return control.dirty && control.hasError('descriptionErr') ? control.errors.message : '';
  }

  submit(): void {
    console.log(this.codeLibForm.value);
    console.log(this.createCodeLib);
  }

  reset(): void {
    this.codeLibForm.reset();
  }

  edit(rowData: CodeLibModel) {
    this.createCodeLib = rowData;
    this.showDialog = true;
  }

  create() {
    this.createCodeLib = {};
    this.showDialog = true;
  }
}
