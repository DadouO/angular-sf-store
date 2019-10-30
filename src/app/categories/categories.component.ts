import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private user: Observable<String>;
  private categories: Object[] = new Array();

  constructor(private router: Router, private authService: AuthentificationService,
    private produitsService: ProduitsService) { 
      this.user = this.authService.getUser();
    }

  ngOnInit() {
    this.produitsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  ProduitsparCategories(categorie){
    this.router.navigate(['/produits',categorie]);

    // this.route.params.subscribe((params :Params) => {
    //   console.log('dans categories component avec ' + params["categorie"]);
    //   if (params["categorie"]!== undefined){
    //     console.log("/produits/categorie/"+params["categorie"]);
    //     this.produitsService.getProduitsParCategories(params["categorie"])
    //     .subscribe(categories => {this.categories = categories;
    //     });
    //   }
    // });
  }

}
