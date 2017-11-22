import { Component, OnInit, Input } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
import { Subscription } from 'rxjs/Subscription';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'pi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  private fpSubscription: Subscription;
  @Input()
  menuKind = 'white';
  activePage = 1;
  opened = false;
  constructor(private fullPage: MnFullpageService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.fpSubscription = this.appComponent.currentPage$
    .subscribe(nextPage => {
      this.activePage = nextPage;
    });
  }

  toggle() {
    this.opened = !this.opened;
  }

}
