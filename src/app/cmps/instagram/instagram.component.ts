import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.less']
})
export class InstagramComponent implements OnInit {

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
