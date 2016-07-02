import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {NavbarComponent} from './components/navbar.component';
import {HomeComponent} from './components/home.component';


@Component({
  selector: 'my-app',
  template: `
    <my-nav></my-nav>
    <div class="container">
      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {}
