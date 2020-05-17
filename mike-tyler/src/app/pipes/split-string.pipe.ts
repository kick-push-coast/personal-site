import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let split: Array<string> = value.split('');
    split = split.map(x => x.replace(' ', '&nbsp;'));
    return split;
  }

}
