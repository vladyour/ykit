import {
  Directive, ElementRef,
  HostBinding,
  HostListener, Input,
  ViewChild
} from '@angular/core';
import {SelectOptionsComponent} from "../select-options/select-options.component";

@Directive({
  selector: '[ykitSelectBehavior]',
})
export class SelectBehaviorDirective {

  @ViewChild(SelectOptionsComponent) public optionsComponent: SelectOptionsComponent

  @Input()
  closeOnSelect: boolean = true

  @HostBinding('class.closed')
  private closed = true

  constructor(private element: ElementRef) {}

  @HostListener('document:keyup.enter')
  onEnter() {
    if (this.elementIsFocused()) {
      this.onClick()
    }
  }

  @HostListener('click')
  onClick() {
    if (this.closed) {
      this.closed = this.optionsComponent.toggleClose()
    } else if (this.closeOnSelect) {
      this.closed = this.optionsComponent.toggleClose(true)
    }
  }

  @HostListener('document:keyup.escape', ['$event'])
  @HostListener('blur', ['$event'])
  onBlur(event: MouseEvent) {
    this.closed = this.optionsComponent.toggleClose(true)
  }

  private elementIsFocused() {
    return document.activeElement == this.element.nativeElement
  }
}

