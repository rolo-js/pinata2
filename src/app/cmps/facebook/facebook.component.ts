import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.less']
})
export class FacebookComponent implements OnInit {

  @Input()
  size: number;
  @Input()
  color: string;
  constructor() {
    this.size = 20;
    this.color = '#ffffff';
   }

  ngOnInit() {
  }

}
