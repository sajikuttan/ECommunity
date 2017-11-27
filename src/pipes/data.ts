import { Pipe, PipeTransform } from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
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
  videoUrl: SafeResourceUrl;
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private domSanitizer: DomSanitizer) {

  }
  
  transform(value: string, ...args) {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(value));
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
