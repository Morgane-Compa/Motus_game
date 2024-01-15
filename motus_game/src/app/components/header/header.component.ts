import { Component, OnInit } from '@angular/core';
import { ModalesService } from 'src/app/services/modales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  userPseudo: string = '';  // Variable pour stocker le nom d'utilisateur

  constructor(public modalService: ModalesService) {}

  ngOnInit() {
    // Récupère le pseudo de l'utilisateur depuis le localStorage
    const storedUserName = localStorage.getItem('userName');

    // Vérifie si le pseudo existe avant de l'assigner à la variable (mesure de sécurité)
    if (storedUserName) {
      this.userPseudo = storedUserName;
    }
  }

  // Pour afficher ma modale
  showInfoModal() {
    this.modalService.show();
  }

}
