import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { JobModel } from '../models/job.model';

@Injectable()
export class JobsService {

  constructor(private http: Http) {}

  getJob(jobId): Observable<JobModel> {
    return this.http.get(`http://localhost:3000/api/jobs/${jobId}`)
      .map(res => res.json())
  }

  getJobs(): Observable<JobModel[]> {
    return this.http.get('http://localhost:3000/api/jobs')
      .map(res => res.json());
  }

  postJobs(job): Observable<any> {
    let body    = `companyname=${job.companyname}&companyemail=${job.email}&title=${job.title}&skills=${job.skills}&compensation=${job.compensation}&description=${job.description}`,
        headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        console.log('body = ', body);
    return this.http.post('http://localhost:3000/api/jobs', body, {headers: headers});
  }
}
