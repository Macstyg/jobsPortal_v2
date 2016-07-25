import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { JobsService }       from '../services/jobs.service';
import { CollapseOnClick }   from '../directives/collapse-on-click.directive';
import { JobModel }          from '../models/job.model';
import { FilterPipe }        from '../pipes/filter.pipe';


@Component({
  selector: 'my-home',
  template:`
      <h1 class="text-center">Here you can see all the vacancys</h1>
        <div class="col-sm-8 col-sm-offset-2">
          <div class="form-group">
            <label>Search:</label>
            <input type="text" name="name" placeholder="search for a vacancy..." class="form-control" [(ngModel)]="filterText">
          </div>
          <div class="panel panel-success" *ngFor="let job of jobs | filter: filterText">
            <div class="panel-heading" collapse-on-click #cp="collapsible">
              <h1 class="panel-title">{{ job.title }} <span class="label label-info">{{ job.skills }}</span></h1>
            </div>
            <div class="panel-body" *ngIf="!cp.collapsed">

            <div class="media">
              <div class="media-left">
                <a href="#">
                  <img class="media-object" src="">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading"><a [routerLink]="">{{ job.companyname }}</a></h4>
                <a [routerLink]="['/jobs', job._id]">{{ job.description }}</a>
                <div>Compensation: {{ job.compensation }} </div>
              </div>
            </div>

            </div>
          </div>
        </div>
  `,
  providers: [JobsService],
  directives: [ROUTER_DIRECTIVES, CollapseOnClick],
  pipes: [FilterPipe]
})

export class HomeComponent implements OnInit {
  jobs: JobModel[] = [];

  constructor(private jobsService: JobsService) {}


  onGetJobs() {
    this.jobsService.getJobs()
      .map( jobs => {
        let filteredJobs = [];
        for (let job of jobs){
          if (job.status === 'accepted') filteredJobs.push(job);
        }
        return filteredJobs;
      })
      .subscribe(
        jobs => {
          this.jobs = jobs;
        },
        err  => console.error(err)
      );
  }

  ngOnInit() {
    this.onGetJobs();
  }

}
