import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigatorService } from '../../navigator.service'

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
  constructor(private navigator: NavigatorService) { }

  ngOnInit() {
    this.fpSubscription = this.navigator.currentPage$
    .subscribe(nextPage => {
      this.activePage = nextPage;
    });
  }

  toggle() {
    this.opened = !this.opened;
  }

  goto(page: number) {
    this.opened = false;
    this.navigator.gotoSection(page, true);
  }

}
