import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(dateString: any, format: string = 'DD MMM'): unknown {
    const momentDate = moment(dateString);
    return momentDate.format(format);
  };
};
