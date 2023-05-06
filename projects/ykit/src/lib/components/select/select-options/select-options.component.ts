import {Component, HostBinding, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'ykit-select-options',
  templateUrl: './select-options.component.html'
})
export class SelectOptionsComponent {

  @Input()
  optionTemplate: TemplateRef<any> | null

  @Input()
  displayField: string | null

  @Input()
  getDisplayValue: ((value: any) => string) | null

  private _options: any[] = []
  get options(): any[] {
    return this._options;
  }

  @Input()
  set options(value: any[]) {
    this._options = value;
  }

  @Input()
  onSelect: ((value: any) => void)

  selectOption(option: any) {
    this.onSelect(option)
  }

  getValueAsString(option: any): string {
    if (this.getDisplayValue && option) {
      return this.getDisplayValue(option)
    } else if (this.displayField && option) {
      return option[this.displayField]
    } else {
      return option
    }
  }

  toggleClose(value = !this.collapsed): boolean {
    this.collapsed = value
    return value
  }
  @HostBinding('class.collapsed')
  collapsed = true
}
