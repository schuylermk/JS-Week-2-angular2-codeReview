<div class="container">
  <div  [hidden]="submitted">
    <h1>Meal Form</h1>
    <form *ngIf="active" (ngSubmit)="onSubmit()" #mealForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" required
          [(ngModel)]="model.name"
            ngControl="name"  #name="ngForm" >
        <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
          Name is required
        </div>
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control"
          [(ngModel)]="model.alterEgo"
            ngControl="alterEgo" >
      </div>
      <div class="form-group">
        <label for="power">Meal Power</label>
        <select class="form-control" required
          [(ngModel)]="model.power"
            ngControl="power" #power="ngForm" >
          <option *ngFor="#p of powers" [value]="p">{{p}}</option>
        </select>
        <div [hidden]="power.valid || power.pristine" class="alert alert-danger">
          Power is required
        </div>
      </div>
      <button type="submit" class="btn btn-default" [disabled]="!mealForm.form.valid">Submit</button>
      <button type="button" class="btn btn-default" (click)="newMeal()">New Meal</button>
    </form>
  </div>
  <div [hidden]="!submitted">
    <h2>You just submitted this meal:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ model.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Alter Ego</div>
      <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Power</div>
      <div class="col-xs-9 pull-left">{{ model.power }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="submitted=false">Edit</button>
  </div>
</div>
