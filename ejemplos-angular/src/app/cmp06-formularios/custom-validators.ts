import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  static conSimbolos(control: AbstractControl): null | ValidationErrors {

    if (/[.,-_]{1,}/.test(control.value)) {
      return null
    }

    return {
      simbolos: {
        actual: control.value,
        required: '.,-_'
      }
    }
  }

}