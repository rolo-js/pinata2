import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.less']
})
export class TwitterComponent implements OnInit {

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
