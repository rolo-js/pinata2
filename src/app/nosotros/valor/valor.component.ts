import { Component, OnInit, Input } from '@angular/core';
import { Valor } from './valor';

@Component({
  selector: 'pi-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.less']
})
export class ValorComponent implements OnInit {

  @Input() valor: Valor;

  constructor() { }

  ngOnInit() {
  }

}
