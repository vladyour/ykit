import { Component } from '@angular/core';
import {Color} from "../select-demo/select-demo.component";

@Component({
  selector: 'app-multi-select-demo',
  templateUrl: './multi-select-demo.component.html',
})
export class MultiSelectDemoComponent {

  colors: Color[] = [
    new Color("#d22d11", "Red"),
    new Color("#d2a511", "Yellow"),
    new Color("#11d22d", "Green"),
    new Color("#11d2d2", "Cyan"),
    new Color("#1111d2", "Blue"),
    new Color("#d211d2", "Magenta"),
    new Color("#d21111", "Dark Red"),
    new Color("#d2d211", "Dark Yellow"),
    new Color("#11d2d2", "Dark Green"),
    new Color("#11d2d2", "Dark Cyan"),
    new Color("#1111d2", "Dark Blue"),
  ]
  selectedValue: Color[] = this.colors
}
