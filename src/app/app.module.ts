import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarDemoComponent } from './avatar-demo/avatar-demo.component';
import { AvatarModule } from "@vladyour/ykit";
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import { ExpandableDemoComponent } from './expandable-demo/expandable-demo.component';
import {ExpandableModule} from "../../projects/ykit/src/lib/components/expandable/expandable.module";
import { AccordionDemoComponent } from './accordion-demo/accordion-demo.component';
import {AccordionModule} from "../../projects/ykit/src/lib/components/accordion/accordion.module";
import { InputDemoComponent } from './input-demo/input-demo.component';
import {FormModule} from "../../projects/ykit/src/lib/components/form/form.module";
import { SelectDemoComponent } from './select-demo/select-demo.component';
import {SelectModule} from "../../projects/ykit/src/lib/components/select/select.module";
import {FormsModule} from "@angular/forms";
import { MultiSelectDemoComponent } from './multi-select-demo/multi-select-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarDemoComponent,
    ButtonDemoComponent,
    ExpandableDemoComponent,
    AccordionDemoComponent,
    InputDemoComponent,
    SelectDemoComponent,
    MultiSelectDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    ExpandableModule,
    AccordionModule,
    FormModule,
    SelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
