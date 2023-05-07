import { Component } from '@angular/core';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent {
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
  selectedValue: Color = this.colors[0]
  selectedValueForCustomDisplay: Color = this.colors[1]
  selectedValueForCustomOptionDisplay: Color = this.colors[2]
  emptyValue: Color | null = null
  rgbValue = this.colors[3].rgb
}

class Color {
  constructor(public rgb: string, public name: string) {}
}