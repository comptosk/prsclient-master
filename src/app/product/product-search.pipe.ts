import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class'; 

@Pipe({
  name: 'productSearch'  
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string): Product[] {
    if (products == null || searchCriteria == null || searchCriteria == "") return products;
    let selProducts: Product[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for (let p of products){
      if(p.partNbr.toLowerCase().includes(searchCriteria)
        || p.name.toLowerCase().includes(searchCriteria)
        || p.price.toString().includes(searchCriteria)
        || p.unit.toLowerCase().includes(searchCriteria)
        || p.vendor.name.toLowerCase().includes(searchCriteria) 
        ){
          selProducts.push(p);
        }
    }
    return selProducts;
  }
}
