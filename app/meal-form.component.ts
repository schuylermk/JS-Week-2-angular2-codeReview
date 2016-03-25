import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Hero }    from './meal';
@Component({
  selector: 'meal-form', // Able to drop into parent template w/ <hero-form> tag
  templateUrl: 'app/meal-form.component.html'
})
export class MealFormComponent {
  nutrition = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Meal(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet'); //dummy data
  submitted = false;
  onSubmit() { this.submitted = true; }
  // Reset the form with a new meal AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  newMeal() {
    this.model = new Meal(42, '', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
}
