import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  @Output() onClickRemove = new EventEmitter();
  @Output() onClickCheck = new EventEmitter(); 
  
  remove() {
    this.onClickRemove.emit();
  }

  check() {
    this.onClickCheck.emit();
  }

}
