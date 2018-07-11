import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg="d";
  receiveMessage($event){
    console.log("triggered")
    this.msg = $event;
  }
  
}
