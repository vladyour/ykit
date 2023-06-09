import {Component, EventEmitter, HostBinding, Input, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'ykit-select-options',
  templateUrl: './select-options.component.html'
})
export class SelectOptionsComponent {

  @Input()
  optionTemplate: TemplateRef<any> | null

  @Input()
  searchPlaceholder: string | null

  @Input()
  noOptionsMessage: string | null

  @Input()
  displayField: string | null

  @Input()
  getDisplayValue: ((value: any) => string) | null

  @Input()
  selectedValue: any | null

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

  isSelected(option: any) {
    return this.selectedValue === option
  }

  onClick(event: MouseEvent) {
    event.stopPropagation()
  }

  @Output()
  search = new EventEmitter<string>()

  searchValue: string;

  private timeout: any
  onSearchChange() {
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => { this.search.emit(this.searchValue) }, 1000)
  }
}
