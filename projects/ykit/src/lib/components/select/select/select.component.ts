import {
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectValueComponent} from "../select-value/select-value.component";
import {SelectOptionsComponent} from "../select-options/select-options.component";
import {SelectBehaviorDirective} from "../select-behavior/select-behavior.directive";

@Component({
  selector: 'ykit-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  // hostDirectives: [SelectBehaviorDirective]
})
export class SelectComponent extends SelectBehaviorDirective implements ControlValueAccessor {

  @ContentChild(SelectValueComponent) public valueComponent: SelectValueComponent | null

  @HostBinding('attr.tabindex') tabindex = 0

  @ContentChild('optionTemplate', {static: false}) public optionTemplate: TemplateRef<any> | null

  value: any = null

  private _options: any[] = []
  get options(): any[] {
    return this._options;
  }

  @Input()
  set options(value: any[]) {
    this._options = value;
  }

  @Input()
  displayField: string | null

  @Input()
  getDisplayValue: ((value: any) => string) | null

  onChange: (newValue: any) => {}
  selectValue = (newValue: any) => {
    this.onChange(newValue)
    this.writeValue(newValue)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  onTouched: () => {}
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  getValueAsString(): string {
    if (this.getDisplayValue && this.value) {
      return this.getDisplayValue(this.value)
    } else if (this.displayField && this.value) {
      return this.value[this.displayField]
    } else {
      return this.value
    }
  }
}
