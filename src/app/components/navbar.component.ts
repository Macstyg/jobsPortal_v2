import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-nav',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a [routerLink]="['/']" class="navbar-brand"><span class="glyphicon glyphicon-fire text-danger"></span> All Jobs</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a [routerLink]="['/jobs/post']">Post a job</a></li>
        </ul>
      </div>
    </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {}
