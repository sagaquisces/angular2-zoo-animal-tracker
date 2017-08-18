import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}}'s details:</h3>
      <hr>
      <div class="form-inline">
        <div class="form-group">
          <label for="name">Edit Name</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.name" id="name" />
        </div>
        <div class="form-group">
          <label for="age">Edit Age</label>
          <input type="number" class="form-control" [(ngModel)]="childSelectedAnimal.age" id="age" />
        </div>
        <div class="form-group">
          <label for="caretakers">Edit No. of Caretakers</label>
          <input class="form-control" [(ngModel)]="childSelectedAnimal.caretakers" id="caretakers" />
        </div>
        <button class="btn btn-default"(click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `

})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
