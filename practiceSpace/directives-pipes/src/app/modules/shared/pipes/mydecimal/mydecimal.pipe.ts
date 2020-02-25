import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';

/**
 * 
 * 
 * usage:
 * mydecimal: '0-1.0-2'
    1111 => 1.11
 */
@Pipe({
  name: 'mydecimal'
})
export class MydecimalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (args[0]) {
      let numberFormat: string = args[0];
      let minWhole = numberFormat.charAt(0);
      let maxWhole = numberFormat.charAt(2);
      let minDecimals = numberFormat.charAt(4);
      let maxDecimals = numberFormat.charAt(6);      
      if (isNumber(minWhole) && isNumber(maxWhole) && isNumber(minDecimals) && isNumber(maxDecimals)) {
        
      }
    }
    console.log(value);
    return value;

  }

}