import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class Focus {

  elementRef = inject(ElementRef)

  constructor(
    // private elementRef: ElementRef,
  ) {
    console.log(this.elementRef)
    this.elementRef.nativeElement.focus()
  }

}
