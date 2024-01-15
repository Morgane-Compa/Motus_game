import { Component } from '@angular/core';

@Component({
  selector: 'app-motus-page',
  templateUrl: './motus-page.component.html',
  styleUrls: ['./motus-page.component.scss']
})
export class MotusPageComponent {

  code: string = "";

  keyboard: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  updateCode(keyValue: string) {
    this.code = keyValue;
  }

  remove() {
    this.code = this.code.slice(0, -1);
  }

  validation() {
    return this.code === "pasteque" ? alert(" Bien joué ^ _< ") : alert("Essaie encore");
  }
      
}
