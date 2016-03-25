import {Component} from 'angular2/core';
import {MealFormComponent} from './meal-form.component'

@Component({
    selector: 'my-app',
    template: '<meal-form></meal-form>',
    directives: [MealFormComponent]
})
export class AppComponent { }
