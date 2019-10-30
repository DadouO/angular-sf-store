import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';

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
export class AuthentificationService {
  private user:Subject<String> = new BehaviorSubject<String>(undefined);
  private baseURL: String = "http://localhost:8888/";

  constructor(private http: HttpClient) { }

  getUser() {return this.user;}

  connect(data: String) { this.user.next(data);
  console.log("DANS AUTH SERVICE ################ MAJ "+data)}

  disconnect() {this.user.next(null);}

  verificationConnexion(identifiants): Observable<any> {
    return this.http.post(this.baseURL+'utilisateur/connexion', JSON.stringify(identifiants)
    , httpOptions);
  }

}
