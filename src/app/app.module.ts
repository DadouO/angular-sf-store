import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {AuthentificationService} from './authentification.service';
import { ProduitsService } from './produits.service';
import { PanierService } from './panier.service';

import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { CategoriesComponent } from './categories/categories.component';
import { PanierComponent } from './panier/panier.component';
import { from } from 'rxjs';
import { AuteurComponent } from './auteur/auteur.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    MenuComponent,
    ConnexionComponent,
    CategoriesComponent,
    PanierComponent,
    AuteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthentificationService, ProduitsService, PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
