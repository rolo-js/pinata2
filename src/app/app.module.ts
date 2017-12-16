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
import { ClientesComponent } from './clientes/clientes.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ContactComponent } from './contact/contact.component';
import { CformComponent } from './contact/cform/cform.component';
import { AgmCoreModule } from '@agm/core';
import { PromosComponent } from './contact/promos/promos.component';
import { DirsComponent } from './contact/dirs/dirs.component';
import { RecientesComponent } from './contact/recientes/recientes.component';
import { FacebookComponent } from './cmps/facebook/facebook.component';
import { InstagramComponent } from './cmps/instagram/instagram.component';
import { TwitterComponent } from './cmps/twitter/twitter.component';
import { PinterestComponent } from './cmps/pinterest/pinterest.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    LogoComponent,
    MenuComponent,
    HomeComponent,
    NosotrosComponent,
    ValorComponent,
    ServicioComponent,
    ClientesComponent,
    ContactComponent,
    CformComponent,
    PromosComponent,
    DirsComponent,
    RecientesComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    PinterestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MnFullpageModule.forRoot(),
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnnA0eGQqvkqLKR3kW-OcsCOv4sULDzrg'
    }),
    HttpClientModule
  ],
  providers: [ NavigatorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
