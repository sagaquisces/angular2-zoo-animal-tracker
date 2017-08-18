import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <ul class="list-group">
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">
      <h2>{{currentAnimal.name}}</h2>
      <h3>{{currentAnimal.species}}</h3>
    age: {{currentAnimal.age}}, diet: {{currentAnimal.diet}}, location: {{currentAnimal.location}}, No. of caretakers: {{currentAnimal.caretakers}}

    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <edit-animal [childSelectedAnimal]="childSelectedAnimal"
    [childCurrentAnimal]="currentAnimal" (doneButtonClickedSender)="doneButtonClicked()"></edit-animal>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }


  dietColor(currentAnimal) {
    if (currentAnimal.diet === "Carnivore"){
      return "list-group-item list-group-item-danger";
    } else if (currentAnimal.diet === "Herbivore") {
      return "list-group-item list-group-item-success";
    } else {
      return "list-group-item";
    }
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
    // alert(animalToEdit.name);
  }
}
