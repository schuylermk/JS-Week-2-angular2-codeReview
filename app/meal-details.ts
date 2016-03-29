import {Component} from 'angular2/core';
import {Meal} from './meal';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-details">
      <h2>{{meal.name}}</h2>
      <p>{{meal.details}}</p>
      <p>{{meal.nutrition}}</p>
      <button type="button" class="btn btn-default"></button>
    </div>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}
