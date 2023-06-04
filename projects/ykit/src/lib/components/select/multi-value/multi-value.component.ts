import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ykit-multi-value',
  templateUrl: './multi-value.component.html',
})
export class MultiValueComponent {

  @Input()
  values: any[]

  @Output()
  onDelete = new EventEmitter<any>()

  delete($event: MouseEvent, index: any) {
    $event.stopPropagation()
    this.onDelete.emit(index)
  }
}
