import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="row">
      <div class="col-md-6">

        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3>New Animal</h3>
          </div>
          <div class="panel-body">

            <div class="form-group">
              <label class="label label-primary" for="species">Species:</label>
              <input class="form-control" id="species" #newSpecies />
            </div>
            <div class="form-group">
              <label class="label label-primary" for="name">Name:</label>
              <input class="form-control" id="age" #newName />
            </div>

            <div class="row">
              <div class="col-xs-3">
                <div class="form-group">
                  <label class="label label-primary" for="age">Age:</label>
                  <input class="form-control" id="age" type="number" #newAge />
                </div>
              </div>
              <div class="col-xs-3">
                <div class="form-group">
                  <label class="label label-primary" for="sex">Sex:</label>
                  <select class="form-control" id="sex" #newSex>
                    <option [ngValue]="Male">Male</option>
                    <option [ngValue]="Female">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-xs-6">
                <div class="form-group">
                  <label class="label label-primary" for="diet">Diet:</label>
                  <select class="form-control" id="diet" #newDiet>
                    <option [ngValue]="Carnivore">Carnivore</option>
                    <option [ngValue]="Herbivore">Herbivore</option>
                    <option [ngValue]="Omnivore">Omnivore</option>
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
            <div class="form-group">
              <label class="label label-primary" for="likes">Likes:</label>
              <input class="form-control" id="likes" #newLikes />
            </div>
            <div class="form-group">
              <label class="label label-primary" for="dislikes">Dislikes:</label>
              <input class="form-control" id="dislikes" #newDislikes />
            </div>

            <div class="row">
              <div class="col-xs-3">
                <div class="form-group">
                  <label class="label label-primary" for="enteredby">Your initials:</label>
                  <input class="form-control" id="enteredby" #newEnteredBy />
                </div>
              </div>
            </div>

            <button class="btn" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newEnteredBy.value); newSpecies.value=''; newName.value=''; newAge.value=''; newLikes.value=''; newLocation.value=''; newCaretakers.value=''; newDislikes.value=''; newEnteredBy.value='';">Add Animal</button>


          </div>
        </div>

      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, enteredby: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes, enteredby);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
