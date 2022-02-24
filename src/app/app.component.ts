import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Servizi from './store.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})

export class AppComponent {
  title = 'FE07A_progetto_sett11';
  loading : boolean = false;

  constructor(public http:HttpClient){}


ngOnInit(): void {
  Servizi.loadArticoli(this.http);
}


}

