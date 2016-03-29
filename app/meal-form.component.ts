import {Component, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {Meal}    from './meal';

@Component({
  selector: 'meal-form',
  directives: [FORM_DIRECTIVES],
  template: `
    <div class="meal-input">
      <form class="meal-input">
        <label for="whatFood">What did you have?</label>
        <input placeholder="Type of food" type="text" name="name">
        <label for="whatDetails">Add some details about it.</label>
        <input placeholder="Details..." type="text" name="details">
        <label for="whatCalories">How many calories?</label>
        <input placeholder="Calories" type="number" name="calories">
        <button type="button" name="button"></button>
      </form>
    </div>
  `
})

export class MealFormComponent {

  onSubmit() {this.submitted = true;}
}
