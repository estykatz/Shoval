import { ValidatorFn, FormControl } from '@angular/forms';
export function identityValidator(): ValidatorFn {

  return (control: FormControl): { [key: string]: any } | null => {
    const identity = control.value;
    const error = 'error';
    let arrid = [];
    let sum = 0;
    const arr = [1, 2, 1, 2, 1, 2, 1, 2, 1];
    for (let i = 0; i < identity.length; i++) {
      arrid[i] = identity[i] * arr[i];
    }
    for (let i = 0; i < identity.length; i++) {
      if (arrid[i] > 9) {
        arrid[i] -= 9;
      }
      sum += arrid[i];
    }
    if (sum % 10) {
      return { IdentityError: error };
    }
    else {
      return { IdentityError: null };
    }

  };
}
