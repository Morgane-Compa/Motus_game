import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @Input() code: string = "";

  keyboard: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

updateCode(keyValue: string) {
  this.code += keyValue;
  console.log(keyValue);
}

remove() {
  this.code = this.code.slice(0, -1);
}

check () {
  // return this.code === "pasteque" ? alert(" Bien joué ^ _< ") : alert("Essaie encore");
  if(this.code === "pasteque") {
    alert("Bien joué")
  } else {
    alert("pas bien")
  }
}

}
