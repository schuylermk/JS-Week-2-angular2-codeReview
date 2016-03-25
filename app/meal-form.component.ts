import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Meal }    from './meal';

@Component({
  selector: 'meal-form', // Able to drop into parent template w/ <meal-form> tag
  templateUrl: 'app/meal-form.component.html'
})
export class MealFormComponent {

  // nutrition = ('Less than 300 Calories', '300 Calories or more');

  model = new Meal('', '', this.nutrition);

  submitted = false;

  onSubmit() { this.submitted = true; }
  // Reset the form with a new meal AND restore 'pristine' class state
  // by toggling 'active' flag
  active = true;
  newMeal() {
    this.model = new Meal(42, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
