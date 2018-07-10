import { Component,  Output, EventEmitter ,Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <button (click)="decrement()">-</button>
     <span id="no">{{ toChild}}</span>
     <button (click)="increment()">+</button>
 
  `,
  styles: [],
  inputs: ['toChild'],

})
export class CounterComponent   {
  @Input() toChild: number;

    counterValue;
  constructor() {this.emitMessage()  }

  decrement(){
    --this.toChild;
    this.counterValue = this.toChild;
    this.emitMessage() 
  }
  increment(){
     ++this.toChild
    this.emitMessage() 
  }

  @Output() messageEmitter = new EventEmitter();

  emitMessage() {
   this.messageEmitter.emit(this.toChild);
  }

}
