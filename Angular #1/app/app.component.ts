import { Component, ViewChild,AfterViewInit} from '@angular/core';
import {CounterComponent} from "../app/counter.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CounterComponent) counterComponent;
  ComponentCounterValue;
  bindValue;
  title = 'app';
  message=5;
  parentMessage;
  
  ngAfterViewChecked() {
    this.bindValue = this.counterComponent.toChild +1;
 
  }
getInput(value){
this.message = value;
}
recieveMessage($event){
  this.parentMessage = $event;
 } 
}