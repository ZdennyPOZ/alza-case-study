import { Directive, ElementRef,  AfterViewInit, HostListener} from '@angular/core';

@Directive({
  selector: '[heroLongName]'
})
export class LongNameDirective implements AfterViewInit{

  private oldText : string = ""
  constructor(private elem: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    if(this.elem.nativeElement.innerText.length>10){
      this.oldText = this.elem.nativeElement.innerText;
      this.elem.nativeElement.innerText = 'Uvuvwevwevwe Unyetenyevwe Ugwemuhwem Osas';
    }
  }

  @HostListener('mouseout')
  onMouseOut() {
    if(this.elem.nativeElement.innerText.length>10){
      this.elem.nativeElement.innerText = this.oldText;
    }
  }

  ngAfterViewInit(): void {
    if(this.elem.nativeElement.innerText.length>10){
      this.elem.nativeElement.style.color = '#4271FF';
    }
  }
}
