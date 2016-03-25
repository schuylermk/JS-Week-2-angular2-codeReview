export class Meal {
  constructor(
    public id: number,
    public name: string,
    public nutrition: string
  ) {  }
}

//This is a model from which meals can be constructed and given their properties.

// A new meal can be created like this:
//          let myMeal = new Meal(2, 'a Cheeseburger', 'delicious');
//          console.log('For this meal, I ate ' + myMeal.name);
//     ** "For this meal, I ate a Cheeseburger" **
