import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = "id", sortAsc: boolean = true): any {
    if (arr == null) return arr;
    const sortFn = (a: any, b: any): number => {
      let x=(typeof a[col] == "number") ? a[col] : a[col].toString().toLowerCase();
      let y=(typeof b[col] == "number") ? b[col] : b[col].toString().toLowerCase();
      if (x === y) return 0;
      if (x > y) return sortAsc ? 1 : -1;
      else return sortAsc ? -1 : 1;
    }
    return arr.sort(sortFn);
  }

}
