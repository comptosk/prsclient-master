import { User } from '../user/user.class';
// import { RequestLine } from '../requestline/requestline.class';

export class Request {

    id: number = 0;
    description: string = '';
    justification: string = '';
    rejectionReason: string = '';
    deliveryMode: string = '';
    status: string = 'NEW';
    total: number = 0;
    userId: number = 0;
    user: User;
    userName: string = '';
    nameName: string = '';

    constructor(){}

}