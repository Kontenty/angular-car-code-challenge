import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { KentekenCheck } from 'rdw-kenteken-check';

export function kentekenValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    const instance = new KentekenCheck(value);
    const isKentekenValid = instance.matchLicense(value);
    return isKentekenValid ? null : { isKentekenValid };
  };
}
