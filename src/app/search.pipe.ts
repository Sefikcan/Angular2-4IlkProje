import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

@Injectable()

export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any [] {
    if (!items) return [];
    if (value == '') {
      return items;
    } else {
      return items.filter(it => it[field] == value);
    }
  }
}
