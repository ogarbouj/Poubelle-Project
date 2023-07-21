import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(offers: any[], searchTerm: string): any[] {
    if (!offers || !searchTerm) {
      return offers;
    }

    searchTerm = searchTerm.toLowerCase();
    console.log("==>",offers)
    return offers.filter(it => {
      return it.type.toString().includes(searchTerm) || it.title.toString().includes(searchTerm)   || it.price.toString().includes(searchTerm);
    });
  }
}
