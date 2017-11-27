import { Component } from '@angular/core';
import { NavigatorService } from 'app/navigator.service';


@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  options = this.navigator.options;
  constructor (private navigator: NavigatorService) {}

}
