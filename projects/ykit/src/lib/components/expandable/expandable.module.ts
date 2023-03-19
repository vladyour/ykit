import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable/expandable.component';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header.component';
import { ExpandableContentComponent } from './expandable-content/expandable-content.component';



@NgModule({
  declarations: [
    ExpandableComponent,
    ExpandableHeaderComponent,
    ExpandableContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      ExpandableComponent,
      ExpandableHeaderComponent,
      ExpandableContentComponent
  ]
})
export class ExpandableModule { }
