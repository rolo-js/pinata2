import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pi-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.less']
})
export class ServicioComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  items: string[];
  @Input()
  imgSrc: string;
  @Input()
  titleImgSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
