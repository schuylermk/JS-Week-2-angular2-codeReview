import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal';
import {MealFormComponent} from './meal-form.component';
import {MealDetailsComponent} from './meal-details'

@Component({
    selector: 'meals-list',
    inputs: ['myMeals'],
    directives: [MealDetailsComponent],
    template: `<meal-details *ngFor="#meal of myMeals" [meal]="meal"></meal-details>`
})
export class MealsListComponent {
  myMeals: Meal[];
}
