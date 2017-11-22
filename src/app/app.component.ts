import { Component, Input, Output } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pi';
  private currentPageSource = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSource.asObservable();

  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    scrollingSpeed: 1000,
    navigation: false,
    css3: true,
    navigationPosition: 'right',
    verticalCentered: false,
    scrollOverflow: true,
    slidesNavigation: true,
    controlArrows: false,
    onLeave: ( index, nextSlideIndex, direction) => {
      this.currentPageSource.next(nextSlideIndex);
    }
  })


}
