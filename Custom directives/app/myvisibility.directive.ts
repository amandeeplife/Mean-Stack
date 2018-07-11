import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[MyVisibility]'
})
export class MyvisibilityDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { 
    
  }
  @Input() set MyVisibility(value: boolean) { 
    if (value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}