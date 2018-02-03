import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input () set appSetColor(value) {
    this.renderer.setStyle(this.element.nativeElement,
      'background-color', value); }

  constructor(public element: ElementRef,
              public renderer: Renderer2) { }

}
