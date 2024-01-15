import { Component, Input } from '@angular/core';
import { ModalesService } from 'src/app/services/modales.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  @Input() isVisible: boolean = false;

  constructor(public modalService: ModalesService) {}

  hideInfoModal() {
    this.modalService.hide();
  }

}
