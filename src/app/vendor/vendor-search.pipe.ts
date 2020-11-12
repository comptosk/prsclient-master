import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string): Vendor[] {
    if (vendors == null || searchCriteria == null || searchCriteria == "") return vendors;
    let selVendors: Vendor[]=[];
    searchCriteria = searchCriteria.toLowerCase();
    for(let v of vendors){
      if(v.code.toLowerCase().includes(searchCriteria)
        || v.name.toLowerCase().includes(searchCriteria)
        || v.address.toLowerCase().includes(searchCriteria)
        || v.city.toLowerCase().includes(searchCriteria)
        || v.state.toLowerCase().includes(searchCriteria)
        || v.zip.toLowerCase().includes(searchCriteria)
        || v.phone.toLowerCase().includes(searchCriteria)
        || v.email.toLowerCase().includes(searchCriteria)
        ){
        selVendors.push(v);
      }
    }
    return selVendors;
  }

}
