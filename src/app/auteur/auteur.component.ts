import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ProduitsService } from '../produits.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.scss']
})
export class AuteurComponent implements OnInit {

  private user: Observable<String>;
  private produits: Object[] = new Array();

  constructor(private authService: AuthentificationService,
   private route: ActivatedRoute, private produitsService: ProduitsService) { 
      this.user = this.authService.getUser();
    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      console.log('dans auteur component avec ' + params["auteur"]);
      this.produitsService.getProduitsParAuteur(params["auteur"])
        .subscribe(produits => {this.produits = produits
      });
    });
}

// ProduitsParAuteur(auteur){
//   this.router.navigate(['/produits',auteur]);
// }

}
