import { Component, OnInit } from '@angular/core';
import * as Servizi from '../store.service';
import { Articolo } from '../models/articolo';
import { HttpClient } from '@angular/common/http';


@Component({
  template: `

    <p *ngIf ='isLoading'>loading</p>


    <div class="mb-4" *ngFor="let articolo of articoliNegozio">
      <h5 class="card-header">{{articolo.id}}</h5>
      <div class="card-body">
        <h5 class="card-title">{{articolo.name}}</h5>
        <p class="card-text">{{articolo.description}} <br> <b>{{articolo.price | currency : 'EUR'}}</b></p>
        <button type="button" class="btn btn-secondary" [routerLink]="['/details', articolo]">Dettagli</button>
      </div>
  `,
  styles: [
    `
      .mb-4{
        background-color:rgba(184, 184, 192, 0.7);
        border-radius:7px;
        box-shadow: 2px 2px 4px grey;
        max-width: 800px;
        margin-left: 10px;
        margin: 0 auto;
      };
    `
  ],
})
export class NegozioPage implements OnInit {
  articoliNegozio: Articolo[]=[];

  isLoading = false;



  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.isLoading = true;
    setInterval(()=>{
      if(this.articoliNegozio!=[]){
        this.isLoading=false;
      }
      this.articoliNegozio=Servizi.articoli;
    },20)
  }

}
