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

  private searchValue: string | null = null

  private _options: any[] = []
  get options(): any[] {
    if (this.searchValue) {
      return this._options.filter(option => {
        const optionAsString = this.getValueAsString(option).toLowerCase()
        return optionAsString.includes(this.searchValue!!.toLowerCase())
      })
    } else {
      return this._options
    }
  }

  @Input()
  searchPlaceholder: string | null

  @Input()
  noOptionsMessage: string | null

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

  @Input()
  multiple: boolean = false

  resetValue(event: MouseEvent) {
    event.stopPropagation()
    this.selectValue(null)
  }

  onChange: (newValue: any) => {}
  selectValue = (newValue: any | null) => {
    let value
    if (this.multiple && newValue) {
      value = this.value || []
      value.push(newValue)
    } else {
      value = (newValue && this.valueField) ? newValue[this.valueField] : newValue
    }
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

  setDisabledState(isDisabled: boolean): void {}

  writeValue(obj: any): void {
    this.value = obj
    this.searchValue = null
  }

  getValueAsString(option = this.value): string {
    let value
    if (this.getDisplayValue && option) {
      value = this.getDisplayValue(option)
    } else if (this.displayField && option) {
      value = option[this.displayField] || option
    } else {
      value = option
    }
    return value
  }

  onSearch(search: string) {
    this.searchValue = search
  }

  hasValue() {
    if (this.multiple) {
      return this.value && this.value.length
    } else {
      return this.value
    }
  }

  deleteValueFromArray(index: number) {
    if (!this.multiple) {
      console.warn("An element cannot be delete from an array as selector is not multiple.")
      return
    }
    this.value.splice(index, 1)
    this.onChange(this.value)
    this.writeValue(this.value)
  }
}
