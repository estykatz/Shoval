import { ValidatorFn, FormControl ,FormGroup} from '@angular/forms';
export function sisterAndBrotherValidator(ctrls: any): ValidatorFn {
  return (form: FormGroup): { [key: string]: any } | null => {
    const fname = form.controls[ctrls[0]].value;
    const lname = form.controls[ctrls[1]].value;
    const phone = form.controls[ctrls[2]].value;
    if (fname != '' && lname != '' && phone != '') {
      return { SandB: true }
    }
    else {
      return { SandB: null }
    }
    // if (password == rightpassword) {
    //   return { PasswordError: null };
    // }
    // else {
    //   return { PasswordError: true };
    // }
  };
}
