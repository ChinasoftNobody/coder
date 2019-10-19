import {FormControl} from '@angular/forms';

export class Validators {
  public static nameValidator(control: FormControl): any {
    const mailReg: RegExp = /^[A-Za-z0-9一-龥]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!mailReg.test(control.value)) {
      return {status: 'error', message: '邮箱格式不正确'};
    }
    return {status: 'success'};
  }

  public static descriptionValidator(control: FormControl): any {
    if (!control.value) {
      return {status: 'error', message: '密码是必填的'};
    }
    if (control.value.length < 6) {
      return {status: 'error', message: '密码长度必须大于 6 位'};
    }
    return {status: 'success'};
  }
}
