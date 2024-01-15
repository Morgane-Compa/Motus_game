import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalesService {

  isVisible: boolean = false;

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  constructor() { }
}
