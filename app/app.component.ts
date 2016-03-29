import {Component} from 'angular2/core';
import {MealsListComponent} from './meals-list.component';
import {Meal} from './meal';
import {MealFormComponent} from './meal-form.component';

@Component({
    selector: 'my-app',
    directives: [MealsListComponent], // directives list children of the component ex.)MealsListComponent
    template: `
      <meals-list [myMeals]="myMeals"></meals-list>,
      <meal-form ></meal-form>
    `
})
export class AppComponent {
  myMeals: Meal[] = [];
  constructor() {
    var meal1: Meal = new Meal("pizza", "pepperoni", 150);
    var meal2: Meal = new Meal("lasagna", "vegetarian", 100);
    var meal3: Meal = new Meal("kale salad", "with bacon", 150);
    this.myMeals.push(meal1, meal2, meal3);
    console.log(this.myMeals);
  }

}
