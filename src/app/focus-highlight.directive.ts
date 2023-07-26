import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFocusHighlight]'
})
export class FocusHighlightDirective {

  @Input() defaultcolor:string="";
  @Input() appFocusHighlight:string="";
  constructor(private el: ElementRef) {

   }

   ngOninit(){
    this.highlightColor(this.defaultcolor);
   }

   highlightColor(color:string){
     this.el.nativeElement.style.color =color;
   }

   @HostListener('mouseenter')
   onMouseEnter(){
      this.highlightColor(this.appFocusHighlight || this.defaultcolor);
   }

   @HostListener('mouseleave')
   onMouseExit(){
      this.highlightColor(this.defaultcolor);
   }

}
