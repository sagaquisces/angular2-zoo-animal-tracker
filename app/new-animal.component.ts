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
                    <option [value]="Male">Male</option>
                    <option [value]="Female">Female</option>
                  </select>
                </div>
              </div>
              <div class="col-xs-6">
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
            <div class="form-group">
              <label class="label label-primary" for="likes">Likes:</label>
              <input class="form-control" id="likes" #newLikes />
            </div>
            <div class="form-group">
              <label class="label label-primary" for="dislikes">Dislikes:</label>
              <input class="form-control" id="dislikes" #newDislikes />
            </div>
            <button class="btn"(click)="doneButtonClicked()">Done</button>


          </div>
        </div>

      </div>
    </div>
  `
})

export class NewAnimalComponent {

}
