import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if (users == null || searchCriteria == null || searchCriteria == "") return users;
    let selUsers: User[]=[];
    searchCriteria = searchCriteria.toLowerCase();
    for(let u of users){
      if(u.userName.toLowerCase().includes(searchCriteria)
        || u.firstName.toLowerCase().includes(searchCriteria)
        || u.lastName.toLowerCase().includes(searchCriteria)
        || u.phone.toLowerCase().includes(searchCriteria)
        || u.email.toLowerCase().includes(searchCriteria)
        ){
        selUsers.push(u);
      }
    }
    return selUsers;
  }

}
