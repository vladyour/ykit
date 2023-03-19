import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'ykit-expandable',
  templateUrl: './expandable.component.html'
})
export class ExpandableComponent {

  @HostBinding('class.collapsed')
  collapsed: boolean = true

  @HostBinding('class.expanded')
  expanded: boolean = false

  toggle() {
    this.collapsed = !this.collapsed
    this.expanded = !this.expanded
  }
}
