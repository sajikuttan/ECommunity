import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Data pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'data',
})
export class Data implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
  public display(){
    return "called";
  }
}
