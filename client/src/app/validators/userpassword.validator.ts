import { ValidatorFn, FormControl, FormGroup } from '@angular/forms';
export function passwordValidator(ctr1: string, ctr2: string): ValidatorFn {
  return (form: FormGroup): { [key: string]: any } | null => {
    const password = form.controls[ctr1].value;
    const rightpassword = form.controls[ctr2].value;
    if (password === rightpassword) {
      return { PasswordError: null };
    }
    else {
      return { PasswordError: true };
    }
  };
}
