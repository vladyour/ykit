import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectValueComponent } from './select-value/select-value.component';
import { SelectComponent } from './select/select.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { SelectBehaviorDirective } from './select-behavior/select-behavior.directive';
import { SelectNoValueComponent } from './select-no-value/select-no-value.component';
import {FormsModule} from "@angular/forms";
import { MultiValueComponent } from './multi-value/multi-value.component';



@NgModule({
  declarations: [
    SelectValueComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectOptionsComponent,
    SelectBehaviorDirective,
    SelectNoValueComponent,
    MultiValueComponent,
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
      SelectComponent,
      SelectValueComponent,
      SelectNoValueComponent
  ]
})
export class SelectModule { }
