import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class JobsService {

  constructor(private http: Http) {}

  getJobs(): Observable<any> {
    return this.http.get('http://localhost:3000/api/jobs');
  }

  postJobs(job): Observable<any> {
    let body    = `companyname=${job.companyname}&companyemail=${job.companyemail}&skills=${job.skills}&compensation=${job.compensation}&title=${job.title}&description=${job.description}`,
        headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post('localhost:3000/api/jobs', body, headers);
  }
}
