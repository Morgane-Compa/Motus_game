import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent {

  @Input() keyValue!: string;
  
  @Output() onClickKey = new EventEmitter();

  keyClick() {
    this.onClickKey.emit(this.keyValue);
  }

}
