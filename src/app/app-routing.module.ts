import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AvatarDemoComponent} from "./avatar-demo/avatar-demo.component";
import {ButtonDemoComponent} from "./button-demo/button-demo.component";

const routes: Routes = [
  {
    path: 'avatar',
    component: AvatarDemoComponent
  },
  {
    path: 'button',
    component: ButtonDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
