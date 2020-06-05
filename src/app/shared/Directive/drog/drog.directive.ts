import { Directive, ElementRef, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appDrog]'
})
export class DrogDirective {

  constructor(private el: ElementRef) {
    const mouseDown = fromEvent(this.el.nativeElement, 'mousedown');
    const mouseUp = fromEvent(this.el.nativeElement, 'mouseup');
    mouseDown.subscribe(() => { console.log(111); });
    mouseUp.subscribe(() => { console.log(222); });
  }



  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
