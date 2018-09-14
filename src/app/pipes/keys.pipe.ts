import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false,
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    console.log('value', value);
    const keys = Object.keys(value).map( key => key);
    console.log(keys);
     return keys;
  }

}
