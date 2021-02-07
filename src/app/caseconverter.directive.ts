import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCaseconverter]'
})
export class CaseconverterDirective {
  @Input('appCaseconverter') text: any;
  constructor(private eleRef: ElementRef) { }


  @HostListener('blur') onBlur() {
    let value: string = this.eleRef.nativeElement.value;
    if (this.text == "lowercase") {
      this.eleRef.nativeElement.value = value.toLocaleLowerCase();
    }
    else if (this.text = "uppercase") {
      this.eleRef.nativeElement.value = value.toUpperCase()
    }
    console.log(this.text)
  }

}
