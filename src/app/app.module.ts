import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarDemoComponent } from './avatar-demo/avatar-demo.component';
import { AvatarModule } from "@vladyour/ykit";

@NgModule({
  declarations: [
    AppComponent,
    AvatarDemoComponent
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
