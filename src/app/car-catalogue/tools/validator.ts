import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const regex = new RegExp(
  /^(\w{2}-\d{2}-\d{2})|(\d{2}-\d{2}-\w{2})|(\d{2}-\w{2}-\d{2})|(\w{2}-\d{2}-\w{2})|(\w{2}-\w{2}-\d{2})|(\d{2}-\w{2}-\w{2})|(\d{2}-\w{3}-\d{1})|(\d{1}-\w{3}-\d{2})|(\w{2}-\d{3}-\w{1})|(\w{1}-\d{3}-\w{2})|(\w{3}-\d{2}-\w{1})|(\d{1}-\w{2}-\d{3})$/
);

export function kentekenValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const isKentekenValid = regex.test(value);
    return isKentekenValid ? null : { isKentekenValid };
  };
}
