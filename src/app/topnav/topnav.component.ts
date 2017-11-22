import { Component, OnInit } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';
import { Subscription } from 'rxjs/Subscription';
import { AppComponent } from '../app.component'

@Component({
  selector: 'pi-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.less']
})
export class TopnavComponent implements OnInit {

  private fpSubscription: Subscription;
  menuKind = 'white';
  constructor(private appComponent: AppComponent) {
   }

  ngOnInit() {
    this.fpSubscription = this.appComponent.currentPage$
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



