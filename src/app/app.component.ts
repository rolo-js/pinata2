import { Component } from '@angular/core';
import { NavigatorService } from 'app/navigator.service';


@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  itemsImpresion: string[] = ['Gran Formato', 'Offset', 'Serigrafía', 'Promocionales', 'Sublimación', 'Display - POP'];
  itemsDiseno: string[] = ['Branding', 'Ilustración', 'Corporativo', 'Fotomanipulación', 'Interfaces UI/UX', 'Editorial']
  options = this.navigator.options;
  constructor (private navigator: NavigatorService) {}

}
