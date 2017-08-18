import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul class="list-group">
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}
<!--
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button> -->
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  // @Output() clickSender = new EventEmitter();

  dietColor(currentAnimal) {
    if (currentAnimal.diet === "carnivore"){
      return "list-group-item list-group-item-danger";
    } else if (currentAnimal.diet === "herbivore") {
      return "list-group-item list-group-item-success";
    } else {
      return "list-group-item";
    }
  }

  // editButtonHasBeenClicked(animalToEdit: Animal) {
  //   this.clickSender.emit(animalToEdit);
  // }
}
