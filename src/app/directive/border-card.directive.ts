import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[pkmnBorderCard]' })
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setBorder(color: string) {
    let border = ' solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
