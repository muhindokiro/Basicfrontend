import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<any> {
    return this.http.get(this.baseUrl + '/drinks/');
        // return this.http.get('https://murmuring-bayou-72324.herokuapp.com/drinks')
  }


}
