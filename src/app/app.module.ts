import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarDemoComponent } from './avatar-demo/avatar-demo.component';
import { AvatarModule } from "@vladyour/ykit";
import { ButtonDemoComponent } from './button-demo/button-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarDemoComponent,
    ButtonDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
