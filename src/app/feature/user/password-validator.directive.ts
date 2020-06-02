import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[stapPasswordValidator]'
})
export class PasswordValidatorDirective {

  constructor() { }

}

export const passwordValidator: ValidatorFn = (control: FormGroup):
ValidationErrors | null =>{
  const pass1 = control.get('password');
  const pass2 = control.get('password2');
  /* if both password are not equal then error with password */
  return pass1.value !== pass2.value ? { 'passwordUnequal': true} : null;
}
