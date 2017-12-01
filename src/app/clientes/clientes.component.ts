import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'pi-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.less']
})
export class ClientesComponent implements OnInit {



  public carouselOne: NgxCarousel;
  public carouselTile: NgxCarousel;

    ngOnInit() {
      this.carouselOne = {
        grid: {xs: 2, sm: 2, md: 5, lg: 6, all: 0},
        slide: 2,
        speed: 800,
        interval: null,
        point: {
          visible: true,
          pointStyles: `
            .ngxcarouselPoint {
              list-style-type: none;
              text-align: center;
              padding: 12px;
              margin: 0;
              white-space: nowrap;
              overflow: auto;
              box-sizing: border-box;
            }
            .ngxcarouselPoint li {
              display: inline-block;
              border-radius: 50%;
              /* border: 2px solid rgba(0, 0, 0, 0.55); */
              background-color: #95d600;
              padding: 4px;
              margin: 0 3px;
              transition-timing-function: cubic-bezier(.17, .67, .83, .67);
              transition: .4s;
              cursor: pointer;
            }
            .ngxcarouselPoint li.active {
                background: #00c4b3;
                transform: scale(1.4);
            }
          `
        },
        load: 2,
        touch: true,
        loop: true
      }

      this.carouselTile = {
        grid: {xs: 2, sm: 2, md: 2, lg: 2, all: 0},
        slide: 2,
        speed: 400,
        animation: 'lazy',
        point: {
          visible: true
        },
        load: 2,
        touch: true,
        easing: 'ease'
      }
    }

    public myfunc(event: Event) {
       // carouselLoad will trigger this funnction when your load value reaches
       // it is helps to load the data by parts to increase the performance of the app
       // must use feature to all carousel
    }
    constructor() { }

}
