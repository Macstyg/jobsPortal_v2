import {Component} from '@angular/core';

@Component({
  selector: 'my-nav',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="/" class="navbar-brand"><span class="glyphicon glyphicon-fire text-danger"></span> All Jobs</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/vacancypost">Post a job</a></li>
        </ul>
      </div>
    </nav>
  `
})

export class NavbarComponent {}
