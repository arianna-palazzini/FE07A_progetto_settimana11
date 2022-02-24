import { Component, OnInit } from '@angular/core';
import { carrello } from '../store.service';
@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link h5" [routerLink]="['/']" routerLinkActive="active">Negozio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5" [routerLink]="['/carrello']" routerLinkActive="active">Carrello {{carrelloNav.length}}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  `,
  styles: [
    `
    .container-fluid{
      box-shadow: 0 10px 14px -14px rgba(0,0,0,0.6);
      margin-bottom: 8px;
    }
    `
  ]
})
export class NavbarComponent implements OnInit {
carrelloNav = carrello
  constructor() { }

  ngOnInit(): void {
  }

}
