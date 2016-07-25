import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'dashboard-btns',
  outputs: ['onSetStatus'],
  template: `
    <button type="button" class="btn btn-success btn-lg" (click)="statusClick('accepted')">Accept</button>
    <button type="button" class="btn btn-danger btn-lg" (click)="statusClick('declined')">Decline</button>
  `
})
export class ButtonsComponent {
  onSetStatus:  EventEmitter<any>;

  constructor() {
    this.onSetStatus = new EventEmitter();
  }

  statusClick(status) {
    this.onSetStatus.emit(status);
  }
}
