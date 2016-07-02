import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

import { JobsService } from '../services/jobs.service';
import { Job }       from './job';

@Component({
  selector: 'my-form',
  template:`
<div class="col-sm-6 col-sm-offset-3">
  <h2 class="text-center">Create your vacancy here</h2>
  <div class="jumbotron">
    <form (ngSubmit)="onSubmit()" #jobForm="ngForm">
      <div class="form-group">
        <label>Company Name:</label>
        <input type="text" placeholder="company name" class="form-control" [(ngModel)]="jobModel.companyname" name="companyname" #companyname="ngModel" required>
        <div [hidden]="companyname.valid || companyname.pristine" class="alert alert-danger">
          Company name is required
        </div>
      </div>
      <div class="form-group">
        <label>Company Email:</label>
        <input type="email" placeholder="company email" class="form-control" [(ngModel)]="jobModel.email" name="email" #email="ngModel" required>
        <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
          Email is required
        </div>
      </div>
      <div class="form-group">
        <label>Vacancy title</label>
        <input type="text" class="form-control" placeholder="Title" [(ngModel)]="jobModel.title" name="title" required>
      </div>
      <div class="form-group">
        <label>Skills</label>
        <input type="text" placeholder="skills" class="form-control" [(ngModel)]="jobModel.skills" name="skills" required>
      </div>
      <div class="form-group">
        <label>Compensation</label>
        <input type="text" class="form-control" placeholder="compensation" [(ngModel)]="jobModel.compensation" name="compensation">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea rows="3" type="text" class="form-control" placeholder="Description" [(ngModel)]="jobModel.description" name="description" required></textarea>
      </div>
      <button type="submit" class="btn btn-success btn-lg btn-block" [disabled]="!jobForm.form.valid">Submit</button>
    </form>
    <div class="row show-hide-message">
      <div class="col-sm-6 col-sm-offset-2">
        <div class="alert alert-info">
          Error message should be here
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
    `
    .ng-valid[required] {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }
    `
  ],
  providers: [JobsService]
})

export class JobsPostComponent {

  constructor(private jobsService: JobsService) {

  }

  jobModel = new Job();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.jobsService.postJobs(this.jobModel)
      .subscribe(
        data => console.log('data = ', data),
        error => console.error(error)
      )
  }

}
