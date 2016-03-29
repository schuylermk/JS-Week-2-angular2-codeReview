import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Meal}    from './meal';

@Component({
  selector: 'meal-form', // Able to drop into parent template w/ <meal-form> tag
  templateUrl: 'app/meal-form.component.html'
})
export class MealFormComponent {

}
