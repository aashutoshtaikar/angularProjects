import {Pipe, PipeTransform} from '@angular/core'
import { isNumber } from 'util';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    
    transform(value: string, ...args: any[]) {
       if(!value){
           return null;
       }
       let actualLimit:number = (args[0]) ? args[0] : 50;
       switch (args[1]) {
           case "uppercase":
                return value.substring(0,actualLimit).toUpperCase() + '...';
                break;
           case "lowercase":
                return value.substring(0,actualLimit).toLowerCase() + '...';
                break;
           default:
                return value.substring(0,actualLimit) + '...';
                break;
       }        
      
    }

}