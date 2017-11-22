import { Component, OnInit, Input } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'pi-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

  @Input()
  menuKind = 'white';

  constructor(private fullPage: MnFullpageService) { }

  ngOnInit() {
  }

}
