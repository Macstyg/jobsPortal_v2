import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { JobsPostComponent } from './components/jobs.post.component';
import { JobsFullComponent } from './components/jobs.full.component';
import { DashboardComponent } from './components/dashboard.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'jobs/post', component: JobsPostComponent },
  { path: 'jobs/:id', component: JobsFullComponent } ,
  { path: 'admin/dashboard', component: DashboardComponent } 
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
