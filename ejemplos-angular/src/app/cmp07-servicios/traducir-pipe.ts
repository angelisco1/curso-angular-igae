import { inject, Pipe, PipeTransform } from '@angular/core';
import { Traductor } from './traductor';

@Pipe({
  name: 'traducir',
})
export class TraducirPipe implements PipeTransform {
  traductor = inject(Traductor)

  transform(value: string): string {
    return this.traductor.traducir(value);
  }

}
