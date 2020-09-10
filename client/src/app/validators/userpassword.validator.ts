import { ValidatorFn, FormControl, FormGroup } from '@angular/forms';
export function passwordValidator(ctrls: any): ValidatorFn {
  return (form: FormGroup): { [key: string]: any } | null => {
    const password = form.controls[ctrls[0]].value;
    const rightpassword = form.controls[ctrls[1]].value;
    if (password == rightpassword) {
      return { PasswordError: null };
    }
    else {
      return { PasswordError: true };
    }
  };
}
