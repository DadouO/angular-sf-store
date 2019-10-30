import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent  {

  private utilisateur = {"email":"", "password":""};
  private message: String = "";

  constructor(private authService: AuthentificationService,
              private router: Router) { }

  OnSubmit() {
    this.authService.verificationConnexion(this.utilisateur).subscribe(response => {
      this.message = response['message'];
      if (response['resultat']){
        this.authService.connect(this.utilisateur.email);
        //this.router.navigate(['/categories']);
        this.router.navigate(['/produits']);
      }
      //setTimeout(()=> {this.router.navigate(['/categories']);},1000);
    });
  }
}
