import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empFirst'
})

export class EmphesizeFirstCharecter implements PipeTransform {
  transform(value: any, args?: any): any {
    let str = value.toString();
    let firstCharecter = str.substring(0, 1);
    let restOfStr = str.substring(1);
    return `<span class="emphesize">${firstCharecter}</span><span class="normal">${restOfStr}</span>`;
  }
}
