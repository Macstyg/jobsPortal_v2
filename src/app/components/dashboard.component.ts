import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { JobsService } from '../services/jobs.service';
import { JobModel }    from '../models/job.model';


@Component({
  selector: 'my-dashboard',
  providers: [JobsService],
  template: `
    <table class="table table-bordered">
      <tr>
        <th>#</th>
        <th>Company</th>
        <th>Email</th>
        <th>Posted</th>
        <th>Status</th>
      </tr>
      <tr *ngFor="let job of jobs; let in = index" [routerLink]="['/jobs', job._id]">

        <td>{{ in + 1 }}</td>
        <td>{{ job.companyname }}</td>
        <td>{{ job.companyemail }}</td>
        <td>{{ job.posted | date }}</td>
        <td>
            <span class="label label-info" *ngIf="job.status === 'waiting'">Waiting</span>
            <span class="label label-success" *ngIf="job.status === 'accepted'">Accepted</span>
            <span class="label label-danger" *ngIf="job.status === 'declined'">Declined</span>
        </td>
      </tr>
    </table>
  `,
  styles: [`
        .table tr:nth-of-type(odd) {
          background-color: #fbfcfd;
        }

        .table tr:hover {
          background-color: #eef1f5;
          cursor: pointer;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class DashboardComponent {
  jobs: JobModel[] = [];

  constructor (private jobsService: JobsService) {}

  onGetJobs() {
    this.jobsService.getJobs()
      .subscribe(
        jobs => {
          this.jobs = jobs.reverse();
        },
        error => console.error(error)
      )
  }

  ngOnInit() {
    this.onGetJobs();
  }
}
