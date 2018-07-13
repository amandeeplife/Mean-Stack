import { Component, OnInit } from '@angular/core';
import {ServiceService} from  './service.service'
@Component({
  selector: 'app-farmer-component',
  template:`Farmers Works!
 
Farm Name
  <ul *ngFor = "let d of data">
  <li><a href="/farm/{{d._id}}">{{d.Farm}}</a></li> 
  
  </ul>
  `,
  styles:[]
})
export class FarmerComponentComponent implements OnInit {

   data;
  constructor(private myDb:ServiceService) { }

  ngOnInit() {
    this.data = this.myDb.getdata();
  }

}
