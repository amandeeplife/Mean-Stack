import { Component, OnInit } from '@angular/core';
 @Component({
  selector: 'app-my-component',
  template: `
  <input #box type="text" ><input type="button" value="pres" (click)="insertData(box.value)"/> 
    <span *ngFor="let val of myArray">
   
     <li>{{ val }} </li>
    
    </span>
 
    <p [MyNewColor]= '"blue"' (messageEmitter) = receiveMessage($event)>colredText</p> 

{{msg}}

     <p *MyVisibility="true" >text</p> 


  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
   myArray
   msg;
  constructor() {
    this.myArray = ["A","B","V"];
   }

  ngOnInit() {
  }
  receiveMessage($event){
    this.msg=$event;
  }
  insertData(data){
     this.myArray.push(data)
      }
}
