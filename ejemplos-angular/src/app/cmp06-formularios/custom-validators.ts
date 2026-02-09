import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  static conSimbolos(control: AbstractControl): null | ValidationErrors {

    if (/[.,-_]{1,}/.test(control.value)) {
      // Esto indica que la validación se cumple
      return null
    }

    // Esto indica que la validación NO se cumple
    return {
      simbolos: {
        actual: control.value,
        required: '.,-_'
      }
    }
  }

}