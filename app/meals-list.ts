import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal';
import {MealFormComponent} from './meal-form.component'

@Component({
    selector: 'my-app',
    template: '<meal-form></meal-form>',
    directives: [MealFormComponent]
})
export class AppComponent { }
