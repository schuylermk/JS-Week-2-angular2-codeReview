
import {Component} from 'angular2/core';
import {MealFormComponent} from './meal-form.component'

@Component({
    selector: 'my-app',
    template: '<meal-form>Let\'s keep track of today\'s meals!</meal-form>',
    directives: [MealFormComponent]
})
export class AppComponent { }
