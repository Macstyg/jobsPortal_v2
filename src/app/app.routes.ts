import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { JobsPostComponent } from './components/jobs.post.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'jobs/post', component: JobsPostComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
