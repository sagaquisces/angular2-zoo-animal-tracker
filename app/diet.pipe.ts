import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})


export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet){
    var output: Animal[] = [];
    if(desiredDiet === "meatEaters") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Carnivore" || input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "veggieEaters") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "Herbivore" || input[i].diet === "Omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
