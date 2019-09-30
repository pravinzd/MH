import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordStrengthValidator = function(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value || '';

  if (!value) {
    return null;
  }

  const upperCaseCharacters = /[A-Z]+/g;
  if (upperCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `Text has to contine Upper case characters,current value`,
      passwordStrengthValue: `${value}`
    };
  }

  const lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `Text has to contine Lower case characters,current value`,
      passwordStrengthValue: `${value}`
    };
  }

  const numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return {
      passwordStrength: `Text has to contine Number characters,current value `,
      passwordStrengthValue: `${value}`
    };
  }

  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return {
      passwordStrength: `Text has to contine Special character,current value`,
      passwordStrengthValue: `${value}`
    };
  }
  return null;
};
