import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AvatarDemoComponent} from "./avatar-demo/avatar-demo.component";

const routes: Routes = [
  {
    path: 'avatar',
    component: AvatarDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
