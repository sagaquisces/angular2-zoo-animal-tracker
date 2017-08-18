import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}}'s details:</h3>
      <hr>
      <div class="form-group">
        <label for="name">Edit Name</label>
        <input class="form-control" [(ngModel)]="childSelectedAnimal.name" id="name" />
      </div>
      <button (click)="doneButtonClicked()">Done</button>
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
