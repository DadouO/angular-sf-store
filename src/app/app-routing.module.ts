import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategoriesComponent } from './categories/categories.component';
import { PanierComponent } from './panier/panier.component';
import { AuteurComponent } from './auteur/auteur.component';



const routes: Routes = [
  { path : 'produits',
    component: ProduitsComponent
  },
  {
    path: 'utilisateur/connexion',
    component: ConnexionComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'auteur/:auteur',
    component: AuteurComponent
  },
  {
    path: 'produits/:categorie',
    component: ProduitsComponent
  },
  {
    path: 'utilisateur/panier',
    component: PanierComponent
  },
  {
    path: 'utilisateur/panier/reset',
    component: PanierComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
