import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public static getAllIndexes(arr: any[], val: any): number[] {
    const indexes: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[ i ] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  }

  public static splitArrayOnIndexes(array: any[], indexes: number[]): any[] {
    const result: any[] = [];
    let start = 0;
    for (const index of indexes) {
      result.push(array.slice(start, index + 1));
      start = index + 1;
    }
    result.push(array.slice(start));
    return result;
  }
}
