import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="py-3 my-4">
    <div class="container">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <a class="nav-link h5 text-muted" [routerLink]="['/']" routerLinkActive="active">Negozio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link h5 text-muted" [routerLink]="['/carrello']" routerLinkActive="active">Carrello</a>
        </li>
      </ul>
      <p class="text-center text-muted">© 2022 Company, Inc</p>
    </div>
  </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
