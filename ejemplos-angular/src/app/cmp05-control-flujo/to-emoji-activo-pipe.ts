import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEmojiActivo',
})
export class ToEmojiActivoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '🟢' : '🔴'
  }

}
