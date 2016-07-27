import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JobsService }      from '../services/jobs.service';
import { JobModel }         from '../models/job.model';
import { ButtonsComponent } from './buttons.component';

@Component({
  selector: 'my-full-job',
  template: `
      <div class="col-sm-8 col-sm-offset-2">
        <h1 class="text-center">{{ job.title }}</h1>
        <div class="row">
          <div><span class="label label-info">{{ job.skills }}</span></div>
          <div class="pull-right"><span class="glyphicon glyphicon-dashboard"></span> {{ job.posted | date }}</div>
        </div>
        <h4>Job description:</h4>
        <div>{{ job.description}}</div>
        <h4>Company name:</h4>
        <div>{{ job.companyname }}</div>
        <h4>Company email:</h4>
        <div>{{ job.companyemail }}</div>
        <h4>Compensation:</h4>
        <div>{{ job.compensation }}</div>
      </div>
      <div *ngIf="isAdmin">
        <button type="button" class="btn btn-success">Accept</button>
        <button type="button" class="btn btn-danger">Decline</button>
      </div>
      <div class="clearfix"></div>
      <dashboard-btns (onSetStatus)="statusWasSet($event)" *ngIf="job.status === 'waiting'"></dashboard-btns>
  `,
  providers: [JobsService],
  directives: [ButtonsComponent]
})

export class JobsFullComponent implements OnInit {
  job: JobModel = new JobModel();
  jobId: string;
  private sub: any;

  constructor(private jobsService: JobsService,
              private route: ActivatedRoute,
              private router: Router) {}

  onGetJob() {
    this.sub = this.route.params
      .subscribe(
        params => {
          this.jobId = params['id']
          this.jobsService.getJob(this.jobId)
            .subscribe(
              job => this.job = job,
              err => console.error(err)
            )
        }
      )

  }

  statusWasSet(status) {
    this.jobsService.updateJob(this.jobId, status)
      .subscribe(
        data => {
          if (data.status === 200) {
            this.router.navigate(['admin/dashboard'])
          }
        },
        error => console.error(error)
      )
  }

  ngOnInit() {
    this.onGetJob();
  }
}
