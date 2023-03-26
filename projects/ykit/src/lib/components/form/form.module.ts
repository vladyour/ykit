import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementComponent } from './form-element/form-element.component';
import { FormLabelComponent } from './form-label/form-label.component';
import { FormMessageComponent } from './form-message/form-message.component';



@NgModule({
  declarations: [
    FormElementComponent,
    FormLabelComponent,
    FormMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      FormElementComponent,
      FormLabelComponent,
      FormMessageComponent
  ]
})
export class FormModule { }
