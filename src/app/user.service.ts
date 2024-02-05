import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable()
export class UserService {




  user:Users[]=[
    {
      name:'hassan',age:20,salary:10000
    },
    {
      name:'ola',age:30,salary:10000
    },
    {
      name:'hadeer',age:20,salary:10000
    },
    {
      name:'fadl',age:20,salary:10000
    },
    {
      name:'alaa',age:20,salary:10000
    },

  ]

  constructor() {

  }
}
