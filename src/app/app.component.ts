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
    scrollingSpeed: 1000,
    navigation: true,
    css3: true,
    navigationPosition: 'right',
    verticalCentered: false,
    scrollOverflow: true,
    onLeave: ( index, nextSlideIndex, direction) => {
      console.log(nextSlideIndex);
      this.title = nextSlideIndex;
    }
  })


}
