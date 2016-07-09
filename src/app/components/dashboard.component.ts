import { Component } from '@angular/core';
import { JobsService } from '../services/jobs.service';

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
      <tr *ngFor="let job of jobs">
        <td>{{ job.id }}</td>
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
    `]
})
export class DashboardComponent {
  jobs: any[] = [];
  i: number = 0;

  constructor (private jobsService: JobsService) {}

  onGetJobs() {
    this.jobsService.getJobs()
      .subscribe(
        jobs => {
          this.jobs = jobs
          let i = 1;
          for (let job of this.jobs ) {
            job.id = i;
            i++;
          }
        },
        error => console.error(error)
      )
  }

  ngOnInit() {
    this.onGetJobs();
  }
}
