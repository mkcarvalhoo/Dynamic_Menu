import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TesteMenuComponent } from './teste-menu/teste-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TesteMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
