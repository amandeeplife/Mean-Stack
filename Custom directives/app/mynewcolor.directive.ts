import { Directive,Input,Output,EventEmitter, ElementRef, Renderer2,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[MyNewColor]',
  host:{
    '(click)':'changeColor()'
  }
})
export class MynewcolorDirective {

  color;
  @HostBinding('style.backgroundColor') myBG;

   
  constructor(private element:ElementRef,
    private renderer2:Renderer2) {
      
     }
   @Output() messageEmitter = new EventEmitter<any>();
   emitColor(){
      this.messageEmitter.emit("An element changed its color to "+this.color)
   }
  @Input() set MyNewColor(color: string) { 
    if (true) {
      this.color = color;
    } else {
 
     }
  }
  changeColor(){
    this.emitColor()
     this.myBG=this.color
   }
}
