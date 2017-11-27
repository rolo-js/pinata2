import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigatorService } from 'app/navigator.service';


@Component({
  selector: 'pi-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.less']
})
export class TopnavComponent implements OnInit {

  private fpSubscription: Subscription;
  menuKind = 'white';
  constructor(private navigator: NavigatorService) {
   }

  ngOnInit() {
    this.fpSubscription = this.navigator.currentPage$
      .subscribe(nextPage => {
        switch (nextPage) {
          case 2:
              this.menuKind = 'green';
            break;
          case 1: case 3:
            this.menuKind = 'white';
            break;
          default:
            this.menuKind = 'gradient'
            break;
        }
      });
  }

}



