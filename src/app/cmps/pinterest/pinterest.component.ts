import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.less']
})
export class PinterestComponent implements OnInit {

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
