import { Injectable } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from 'ngx-fullpage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const maxSlides = 2;

@Injectable()
export class NavigatorService {
  private forcing = false;
  private currentSlide = 0;
  private currentPageSource = new BehaviorSubject<number>(1);
  currentPage$ = this.currentPageSource.asObservable();

  public options: MnFullpageOptions = new MnFullpageOptions({
    scrollingSpeed: 1000,
    navigation: false,
    css3: true,
    navigationPosition: 'right',
    verticalCentered: false,
    scrollOverflow: true,
    slidesNavigation: true,
    controlArrows: false,
    onLeave: ( index, nextSlideIndex, direction) => {
      console.log(index, nextSlideIndex, direction, this.forcing, this.currentSlide);
      if (!this.forcing) {
        if (index === 3 && direction === 'down') {
          if (this.currentSlide === maxSlides) {
          } else {
            this.currentSlide++;
            this.mnFullpageService.moveTo(index, this.currentSlide);
            return false;
          }
        }
        if (index === 3 && direction === 'up') {
          if (this.currentSlide === 0) {
          } else {
            this.currentSlide--;
            this.mnFullpageService.moveTo(index, this.currentSlide);
            return false;
          }
        }
      } else {
        // if (nextSlideIndex === 3 && index !== 3) {
        //   if (direction === 'up') {
        //       this.currentSlide = 0;
        //   }
        //   if (direction === 'down') {
        //     this.currentSlide = maxSlides;
        //   }
        //   // this.mnFullpageService.moveTo(nextSlideIndex, this.currentSlide);
        //   return false;
        // }
      }

      this.forcing = false;
      this.currentPageSource.next(nextSlideIndex);
    }
  });

  constructor(private mnFullpageService: MnFullpageService) { }

  /**
   * gotoSection
   */
  public gotoSection(page: number, force = false) {
    this.forcing = force;
    this.mnFullpageService.moveTo(page);
  }
}

