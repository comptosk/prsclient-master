import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class'

@Pipe({ 
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string): Request[] {
    if (requests == null || searchCriteria == null || searchCriteria == ""){
      return requests;
    }
    let selRequests: Request[] = [];
    searchCriteria = searchCriteria.toLowerCase();
    for (let r of requests){
      if(r.description.toLowerCase().includes(searchCriteria)
        || r.justification.toLowerCase().includes(searchCriteria)
        || r.status.toLowerCase().includes(searchCriteria) 
        || r.rejectionReason.toLowerCase().includes(searchCriteria)
        || r.deliveryMode.toLowerCase().includes(searchCriteria)
        || r.total.toString().includes(searchCriteria)
        || r.userId.toString().includes(searchCriteria)
        ){
          selRequests.push(r);
        }
    }
    return selRequests;
  }

}
