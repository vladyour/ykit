import {
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Input,
  TemplateRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectValueComponent} from "../select-value/select-value.component";
import {SelectBehaviorDirective} from "../select-behavior/select-behavior.directive";
import {SelectNoValueComponent} from "../select-no-value/select-no-value.component";

@Component({
  selector: 'ykit-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent extends SelectBehaviorDirective implements ControlValueAccessor {

  @ContentChild(SelectValueComponent) public valueComponent: SelectValueComponent | null
  @ContentChild(SelectNoValueComponent) public noValueComponent: SelectNoValueComponent | null

  @HostBinding('attr.tabindex') tabindex = 0

  @ContentChild('optionTemplate', {static: false}) public optionTemplate: TemplateRef<any> | null

  private _rawValue: any = null
  private _value: any = null

  get value(): any {
    return this._rawValue
  }

  set value(value: any) {
    this._value = value
    if (value && this.valueField && this.options) {
      const valueField = this.valueField
      this._rawValue = this.options.find(option => option[valueField] === value) || value
    } else {
      this._rawValue = value
    }
  }

  private _options: any[] = []
  get options(): any[] {
    return this._options
  }

  @Input()
  set options(value: any[]) {
    this._options = value
  }

  @Input()
  displayField: string | null

  @Input()
  getDisplayValue: ((value: any) => string) | null

  @Input()
  valueField: string | null

  resetValue(event: MouseEvent) {
    event.stopPropagation()
    this.selectValue(null)
  }

  onChange: (newValue: any) => {}
  selectValue = (newValue: any | null) => {
    const value = (newValue && this.valueField) ? newValue[this.valueField] : newValue
    this.onChange(value)
    this.writeValue(value)
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
    let value
    if (this.getDisplayValue && this.value) {
      value = this.getDisplayValue(this.value)
    } else if (this.displayField && this.value) {
      value = this.value[this.displayField] || this.value
    } else {
      value = this.value
    }
    return value
  }
}
