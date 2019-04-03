import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(counter: number, args: any): string {

    transform(counter: number, args?: any): any {
      const str = Math.floor(counter / 5);
      let output = '';
      for (let i = 1; i <= str; i++) {
        output += '*' + args.count;
      }
      return output;
    }

  }

    }




  }

}


