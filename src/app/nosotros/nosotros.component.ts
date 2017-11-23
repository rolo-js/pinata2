import { Component, OnInit } from '@angular/core';
import { Valor } from './valor/valor';

@Component({
  selector: 'pi-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.less']
})
export class NosotrosComponent implements OnInit {

  valores: Valor[] = [
    {
      title: 'Rapidez',
      imgsrc: '/assets/nos-rocket.svg',
      description: 'Trabajamos sabiendo que todo proyecto, era para ayer'
    },
    {
      title: 'Puntualidad',
      imgsrc: '/assets/nos-clock.svg',
      description: 'Nuestra mejor forma de mostrar el compromiso con nuestros clientes'
    },
    {
      title: 'Calidad',
      imgsrc: '/assets/nos-star.svg',
      description: 'Soluciones Piñata, pasión y entrega que se nota'
    },
    {
      title: '360°',
      imgsrc: '/assets/nos-giroscopio.svg',
      description: 'Nuestros servicios nos permiten brindar soluciones totales'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
