import {Component} from '@angular/core';

@Component({
  selector: 'my-form',
  template:`
<div class="container">
<h2 class="text-center">Create your vacancy here</h2>
<div class="row div col-sm-6 col-sm-offset-3">
 <div class="jumbotron">
 <form ng-submit="job.saveVacancy()">
   <div class="form-group">
     <label>Company Name:</label>
     <input type="text" placeholder="company name" class="form-control">
   </div>
   <div class="form-group">
     <label>Company Email:</label>
     <input type="email" placeholder="company email" class="form-control">
   </div>
   <div class="form-group">
     <label>Vacancy title</label>
     <input type="text" class="form-control" placeholder="Title">
   </div>
   <div class="form-group">
     <label>Skills</label>
     <input type="text" placeholder="skills" class="form-control">
   </div>
   <div class="form-group">
     <label>Compensation</label>
       <input type="text" class="form-control" placeholder="compensation">
   </div>
   <div class="form-group">
     <label>Description</label>
     <textarea rows="3" type="text" class="form-control" placeholder="Description"></textarea>
   </div>
   <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
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
</div>
  `
})

export class JobsPostComponent {

}
