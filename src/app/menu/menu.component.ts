import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private user: Observable<String>;
  private critere = {"auteur":""};

  constructor(private authService: AuthentificationService,
    private router: Router) { 
      this.user = this.authService.getUser();
    }

  ngOnInit() {
    this.router.navigate(['/produits']);
  }

  deconnexion(){
    this.authService.disconnect();
    this.router.navigate(['/produits']);
  }

  onSubmit(){
    console.log(this.critere.auteur)
   // ProduitsParAuteur(auteur){
      // this.router.navigate(['/produits',this.critere.auteur]);
  //  }
      this.router.navigate(['/auteur',this.critere.auteur]);

  }
}
