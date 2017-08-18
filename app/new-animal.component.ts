import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label class="label label-primary" for="species">Species:</label>
          <input class="form-control" id="species" #newSpecies />
        </div>
        <div class="form-group">
          <label class="label label-primary" for="name">Name:</label>
          <input class="form-control" id="age" #newName />
        </div>
        <div class="row">
          <div class="col-xs-4">
            <div class="form-group">
              <label class="label label-primary" for="age">Age:</label>
              <input class="form-control" id="age" type="number" #newAge />
            </div>
          </div>
          <div class="col-xs-8">
            <div class="form-group">
              <label class="label label-primary" for="diet">Diet:</label>
              <select class="form-control" id="diet" #newDiet>
                <option [value]="Carnivore">Carnivore</option>
                <option [value]="Herbivore">Herbivore</option>
                <option [value]="Omnivore">Omnivore</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="form-group">
              <label class="label label-primary" for="location">Location:</label>
              <input class="form-control" id="location" #newLocation />
            </div>
          </div>
          <div class="col-xs-4">
            <div class="form-group">
              <label class="label label-primary" for="caretakers">No. of Caretakers:</label>
              <input class="form-control" id="caretakers" type="number" #newCaretakers />
            </div>
          </div>
        </div>
        <button class="btn btn-default"(click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class NewAnimalComponent {

}
