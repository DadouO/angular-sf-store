import { Component, OnInit, Input } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { PanierService } from '../panier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  private user: Observable<String>;
  private produits: Object[] = new Array();
  private login: String;
  private panier: Object[] = new Array();

  constructor(private route: ActivatedRoute, private produitsService: ProduitsService, 
              private authService: AuthentificationService, private panierService: PanierService) { 
    this.user = this.authService.getUser();
    //console.log("dans le constructeur produits.compo "+this.user)
    this.user.subscribe((login)=> this.login = login);
    console.log(this.login);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      console.log('dans produits component avec ' + params["categorie"]);
      console.log('dans produits component avec ' + params["auteur"]);
      if (params["categorie"]!== undefined){
        console.log("/produits/categorie/"+params['categorie']);
        this.produitsService.getProduitsParCategories(params["categorie"])
        .subscribe(produits => {this.produits = produits;
      });
    } else {
      this.produitsService.getProduits().subscribe(produits => {
        this.produits = produits;
      });
    }

     });
  };

  addproduit(nom){
    console.log("DANS ADDPRODUIT COMP",this.login);
    console.log("DANS ADDPRODUIT COMP", nom);
    console.log("DANS ADDPRODUIT COMP", nom.nom);
    this.panierService.addProduit(this.login, nom.nom).subscribe(
      panier => {this.panier = panier;}
    );
  }

  // ProduitsparCategories(categorie){
  //   this.route.params.subscribe((params :Params) => {
  //     console.log('dans categories component avec ' + params["categorie"]);
  //     if (params["categorie"]!== undefined){
  //       console.log("/produits/categorie/"+params['categorie']);
  //       this.produitsService.getProduitsParCategories(params["categorie"])
  //       .subscribe(produits => this.produits = produits)
  //     }
  //   })
   

}

