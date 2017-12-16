import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'pi-recientes',
  templateUrl: './recientes.component.html',
  styleUrls: ['./recientes.component.less']
})
export class RecientesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getJson() {
    this.http.get('/assets/list.json').subscribe( data => {
      console.log(data);
    })
  }
}
