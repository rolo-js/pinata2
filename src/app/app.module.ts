import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { LogoComponent } from './topnav/logo/logo.component';
import { MenuComponent } from './topnav/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ValorComponent } from './nosotros/valor/valor.component';
import { NavigatorService } from 'app/navigator.service';
import { ServicioComponent } from './servicios/servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LogoComponent,
    MenuComponent,
    HomeComponent,
    NosotrosComponent,
    ValorComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MnFullpageModule.forRoot()
  ],
  providers: [ NavigatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
