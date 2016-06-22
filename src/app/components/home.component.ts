import {Component} from '@angular/core';

@Component({
  selector: 'my-home',
  template:`
    <h1 class="text-center">Here you can see all the vacancys</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="form-group">
            <label>Search:</label>
            <input type="text" name="name" placeholder="search for a vacancy..." class="form-control">
          </div>
          <div class="panel panel-success">
            <div class="panel-heading">
              <h1 class="panel-title"> <span class="label label-info"></span></h1>
            </div>
            <div class="panel-body">
              <div>
                <a href="#"></a>
              </div>
              <a href="#">

              </a>
              <div>Compensation: </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class HomeComponent {}
