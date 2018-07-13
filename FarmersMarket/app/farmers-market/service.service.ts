import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

  getdata (){
    return [{_id:1, Farm : 'Natural Prairie',produce:['lettuce','tomato']},
    {_id:2, Farm : 'Agro Industry',produce:['lettuce','tomato']}]
  }
}
