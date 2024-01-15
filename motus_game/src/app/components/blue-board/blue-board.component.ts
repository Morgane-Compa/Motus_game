import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-board',
  templateUrl: './blue-board.component.html',
  styleUrls: ['./blue-board.component.scss']
})
export class BlueBoardComponent {

  @Input() code: string = "";

}
