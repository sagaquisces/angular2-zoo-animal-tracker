import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="meatEaters">Meat Eaters</option>
    <option value="veggieEaters">Vegetable Eaters</option>
  </select>

  <ul class="list-group">
    <li [class]="dietColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | diet:filterByDiet">
      <h2><span class="label label-default">{{currentAnimal.name}}</span></h2>
      <h3>{{currentAnimal.species}}</h3>
      <ul class="list-group">
        <li class="lead list-group-item"><span class="label label-default">sex:</span> {{currentAnimal.sex}}</li>
        <li class="lead list-group-item"><span class="label label-default">age:</span> {{currentAnimal.age}}</li>
        <li class="lead list-group-item"><span class="label label-default">diet:</span> {{currentAnimal.diet}}</li>
        <li class="lead list-group-item"><span class="label label-default">location:</span> {{currentAnimal.location}}
        <li class="lead list-group-item"><span class="label label-default">No. of caretakers:</span> {{currentAnimal.caretakers}}</li>
      </ul>
    <button *ngIf="!childSelectedAnimal" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <edit-animal [childSelectedAnimal]="childSelectedAnimal"
    [childCurrentAnimal]="currentAnimal" (doneButtonClickedSender)="doneButtonClicked()"></edit-animal>
    </li>
  </ul>
  <hr>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();
  @Output() doneButtonClickedSender = new EventEmitter();

  filterByDiet: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }

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
