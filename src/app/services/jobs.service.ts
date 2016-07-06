import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable }                    from '@angular/core';
import { Observable }                    from 'rxjs/observable';

import { JobModel }   from '../models/job.model';
import { Config }     from '../config/config';

@Injectable()
export class JobsService {
  config: Config = new Config();
  BASE_URL: string = `${this.config.location}api/jobs/`;

  constructor(private http: Http) {}

  getJob(jobId): Observable<JobModel> {
    return this.http.get(`${this.BASE_URL}${jobId}`)
      .map(res => res.json())
  }

  getJobs(): Observable<JobModel[]> {
    return this.http.get(`${this.BASE_URL}`)
      .map(res => res.json());
  }

  postJobs(job): Observable<any> {
    let body    = `companyname=${job.companyname}&companyemail=${job.email}&title=${job.title}&skills=${job.skills}&compensation=${job.compensation}&description=${job.description}`,
        headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        console.log('body = ', body);
    return this.http.post(`${this.BASE_URL}`, body, {headers: headers});
  }
}
