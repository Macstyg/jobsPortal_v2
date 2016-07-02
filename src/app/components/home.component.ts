import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'my-home',
  template:`
      <h1 class="text-center">Here you can see all the vacancys</h1>
        <div class="col-sm-8 col-sm-offset-2">
          <div class="form-group">
            <label>Search:</label>
            <input type="text" name="name" placeholder="search for a vacancy..." class="form-control">
          </div>
          <div class="panel panel-success" *ngFor="let job of jobs">
            <div class="panel-heading">
              <h1 class="panel-title">{{ job.title }} <span class="label label-info">{{ job.skills }}</span></h1>
            </div>
            <div class="panel-body">
              <div>
                <a href="#">{{ job.companyname }}</a>
              </div>
              <a [routerLink]="['/jobs', job._id]">{{ job.description }}</a>
              <div>Compensation: {{ job.compensation }} </div>
            </div>
          </div>
        </div>
  `,
  providers: [JobsService],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {
  jobs: Object[] = [];

  constructor(private jobsService: JobsService) {}


  onGetJobs() {
    this.jobsService.getJobs()
      .subscribe(
        data => {
          this.jobs = data.json();
        },
        err  => console.error(err)
      );
  }

  ngOnInit() {
    this.onGetJobs();
  }

}
