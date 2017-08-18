import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Zoo Animal Tracker</h1>
    <animal-list [childAnimalList]="animals" (clickSender)="editAnimal($event)" [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></animal-list>
    <new-animal ></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

  animals: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises", "md"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based", "rd"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud Noises", "rd")
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
