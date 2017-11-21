import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pi-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

  isGreen = false;
  
  constructor() { }

  ngOnInit() {
  }

}
