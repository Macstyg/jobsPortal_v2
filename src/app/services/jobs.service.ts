import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class JobsService {

  constructor(private http: Http) {}

  getJob(jobId): Observable<any> {
    return this.http.get(`http://localhost:3000/api/jobs/${jobId}`)
  }

  getJobs(): Observable<any> {
    return this.http.get('http://localhost:3000/api/jobs');
  }

  postJobs(job): Observable<any> {
    let body    = `companyname=${job.companyname}&companyemail=${job.email}&title=${job.title}&skills=${job.skills}&compensation=${job.compensation}&description=${job.description}`,
        headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        console.log('body = ', body);
    return this.http.post('http://localhost:3000/api/jobs', body, {headers: headers}); 
  }
}
