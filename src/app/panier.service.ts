import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { AuthentificationService } from './authentification.service';
import {Observable, from} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Methods":"GET,POST",
    "Access-Control-Allow-Headers":"Content-type",
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*"
  })
}

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private baseURL: String = "http://localhost:8888/";

  constructor(private http: HttpClient) {

  }


    getPanier(login) : Observable<any> {
      console.log("###########################"+login)
      console.dir(login)
      return this.http.get(this.baseURL+'utilisateur/panier/'+login)
    };

    panierReset(login) :Observable<any> {
      console.log("Dans panier.service.panierReset() => utilisateur/panier/reset/"+login);	
      return this.http.get(this.baseURL+'utilisateur/panier/reset/'+login)
   }   
   
   addProduit(email, nom) :Observable<any> {
     console.log("DANS PANIER SEVICE ADD", email,nom);
     return this.http.post(this.baseURL+'produits/panier/add', {"email": email, "nom":nom},
     httpOptions)
   }

}