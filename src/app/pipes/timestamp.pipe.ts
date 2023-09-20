import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(dateString: any): unknown {
    const momentDate = moment(dateString);
    return momentDate.format('DD MMM');
  }

}
