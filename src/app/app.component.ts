import { Component, Input, Output } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pi';
  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    scrollingSpeed: 700,
    navigation: true,
    css3: true,
    navigationPosition: 'right',
    verticalCentered: false
  })
//   @Input() public options: MnFullpageOptions = new MnFullpageOptions({
//     navigation: true,
//     navigationPosition: 'right',
//     keyboardScrolling: false,
//     scrollingSpeed: 2000
// });
// constructor(public fullpageService: MnFullpageService) {
// }

}
