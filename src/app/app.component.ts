import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Servizi from './store.service';

@Component({
  selector: 'app-root',
  template: `

    <app-navbar></app-navbar>
    <div id="sfondo">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>

   `,
  styles: [
    `
    #sfondo {
      background-image: url("../assets/img/sfondo.jpg");
      background-position: center;
      text-align: center;
    }
    `
  ],
})

export class AppComponent {
  title = 'FE07A_progetto_sett11';
  loading : boolean = false;

  constructor(public http:HttpClient){}


ngOnInit(): void {
  Servizi.loadArticoli(this.http);
}


}

