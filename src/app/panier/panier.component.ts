import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import {PanierService} from '../panier.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  private user: Observable<String>;
  private panier: Object[] = new Array();
  private login: String;

  constructor(private authService: AuthentificationService,
              private panierService: PanierService, private router:Router) {
                this.user = this.authService.getUser();
                //console.log("dans le constructeur panier.compo "+this.user)
                //console.dir(this.user)
                this.user.subscribe((login)=> this.login = login);
                console.log(this.login);
               }

  ngOnInit() {
        //console.dir("dans panier.compo "+ this.user)
        this.panierService.getPanier(this.login).subscribe(
          panier => {
            this.panier = panier;
            console.dir(panier);
            console.log(panier[0].produits);
          });
  };

  commande(){
    // this.panierService.panierReset(this.login).subscribe(res =>
    //   this.router.navigate(['/utilisateur/panier/reset'])
    // );
    this.panierService.panierReset(this.login).subscribe( panier => {
      this.panier = panier;
      this.router.navigate(['/utilisateur/panier'])
    });

  }

}
