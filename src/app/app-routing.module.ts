import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AvatarDemoComponent} from "./avatar-demo/avatar-demo.component";
import {ButtonDemoComponent} from "./button-demo/button-demo.component";
import {ExpandableDemoComponent} from "./expandable-demo/expandable-demo.component";
import {AccordionDemoComponent} from "./accordion-demo/accordion-demo.component";
import {InputDemoComponent} from "./input-demo/input-demo.component";
import {SelectDemoComponent} from "./select-demo/select-demo.component";

const routes: Routes = [
  {
    path: 'avatar',
    component: AvatarDemoComponent
  },
  {
    path: 'button',
    component: ButtonDemoComponent
  },
  {
    path: 'expandable',
    component: ExpandableDemoComponent
  },
  {
    path: 'accordion',
    component: AccordionDemoComponent
  },
  {
    path: 'input',
    component: InputDemoComponent
  },
  {
    path: 'select',
    component: SelectDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
