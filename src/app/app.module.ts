import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LogoComponent } from './topnav/logo/logo.component';
import { MenuComponent } from './topnav/menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LogoComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MnFullpageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
