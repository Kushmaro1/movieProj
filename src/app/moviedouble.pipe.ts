import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 


@Pipe({
  name: 'moviedouble',
  pure: false
})
export class MoviedoublePipe implements PipeTransform {

  transform(value: any): any{
    if(value!== undefined && value!== null){
        return _.uniqBy(value, 'name');
    }
    return value;

}
}
