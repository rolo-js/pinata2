import { Component, OnInit, Input } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';
import { NavigatorService } from 'app/navigator.service';

@Component({
  selector: 'pi-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

  @Input()
  menuKind = 'white';

  constructor(private navigator: NavigatorService) { }

  ngOnInit() {
  }

  goHome() {
    this.navigator.gotoSection(1, true);
  }
}
