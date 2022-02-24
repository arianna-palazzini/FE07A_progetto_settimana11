import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articolo } from '../models/articolo';
import * as Servizi from '../store.service';

@Component({
  template: `
    <div *ngIf="articolo" class="card-body">
      <h5 class="card-title">{{ articolo.name }}</h5>
      <p class="card-text">
        {{ articolo.description }} <br />
        <b>{{ articolo.price | currency: 'EUR' }}</b>
      </p>
      <button type="button" class="btn btn-secondary" (click)="aggiungi()">
        Aggiungi al carrello
      </button>
    </div>
  `,

  styles: [
    `
      div{
        background-color: #faf0e6;
        border-radius:7px;
        box-shadow: 2px 2px 4px grey;
        max-width: 800px;
        margin-left: 10px;
      };
    `
  ],
})

export class CarrelloDetailsPage implements OnInit {
  articolo!: Articolo;
  sub!: Subscription;

  constructor(private router: ActivatedRoute) {}



  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
    this.articolo = <Articolo>params;
    console.log(this.articolo);
    console.log(params);
    });
  }

  aggiungi() {
    Servizi.aggiungiAlCarrello(this.articolo);
  }
}
