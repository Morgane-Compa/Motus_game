import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  //Je éclare une variable pour stocker le texte de l'input
  userName: string = '';

    // Mon constructeur pour me permettre de renvoyer l'utilisateur sur une autre page
    constructor(private router: Router) {}

  // Je créer une fonction pour l'évènement au click du bouton 
  onSaveButtonClick() {
    // Vérifie que ma variable n'est pas vide
    if (this.userName.trim() !== '') {

      // Enregistre le texte dans le localStorage avec la clé "userName"
      localStorage.setItem('userName', this.userName);

       // Navigue vers la page du jeux
       this.router.navigate(['motus']);

    } else {
      // si l'utilisateur n'a pas rentré de valeur dans l'input alors il ne se passe rie et ce message s'affiche
      alert('Veuillez entrer du texte avant de cliquer sur le bouton.');
    }
  }

}
