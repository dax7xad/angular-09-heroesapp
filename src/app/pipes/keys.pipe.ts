import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys: any = [];

    // for (key in value) {
    //   keys.push(key);
    // }
    console.log('value', value);
    keys = Object.keys(value).filter( key => key);
    console.log(keys);
     return keys;
  }

}
