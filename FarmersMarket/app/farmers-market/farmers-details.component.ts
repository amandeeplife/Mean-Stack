import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ServiceService} from  './service.service'

@Component({
  selector: 'app-farmers-details',
  template: `
    
 
      <ul *ngFor = "let d of data">
      <li *ngIf = "d._id==[rId]">{{d.Farm}}</li>

      </ul>
 
     
  `,
  styles: []
})
export class FarmersDetailsComponent implements OnInit {

  rId;
  data
  constructor(private route: ActivatedRoute, private service:ServiceService) {
    this.data = service.getdata(); 
    route.params.subscribe(data=>this.rId=data['id'])
  }
 
  ngOnInit() {
  }

}
