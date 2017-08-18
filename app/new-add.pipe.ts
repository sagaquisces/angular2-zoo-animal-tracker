import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './Animal.model';

@Pipe({
  name: "newAdd",
  pure: false
})


export class NewAddPipe implements PipeTransform {
  transform(input: Animal[]){
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].enteredby === "new") {
        output.push(input[i]);
      }
    }
    return output;
  }
}
