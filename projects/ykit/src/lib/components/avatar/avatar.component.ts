import {Component, Input} from '@angular/core';
import {INVALID_ARGUMENTS_NULL_OR_EMPTY} from "../../../exceptions/exceptions";

@Component({
  selector: 'ykit-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent {
  get letters(): string {
    return this._letters;
  }

  @Input()
  set letters(value: string) {
    if (!value) {
      console.warn(INVALID_ARGUMENTS_NULL_OR_EMPTY)
    }
    this._letters = value;
  }

  private _letters: string
}
