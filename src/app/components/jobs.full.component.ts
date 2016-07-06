import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { JobModel } from '../models/job.model';

@Component({
  selector: 'my-full-job',
  template: `
      <div class="col-sm-8">
        <h1>{{ job.title }}</h1>
        <div><span class="label label-info">{{ job.skills }}</span></div>
        <div class="">{{ job.description}}</div>
        <div><span class="glyphicon glyphicon-dashboard"></span>{{ job.posted }}</div>
        <div>Company name: {{ job.companyname }}</div>
        <div>Company email: {{ job.companyemail }}</div>
        <div>Compensation: {{ job.compensation }}</div>
      </div>
  `,
  providers: [JobsService]
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
          let id = params['id']
          this.jobsService.getJob(id)
            .subscribe(
              job => this.job = job,
              err => console.error(err)
            )
        }
      )

  }

  ngOnInit() {
    this.onGetJob();
  }
}
