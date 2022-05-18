import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LocaldrinksService {

  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

    getDrinks(): Observable<any> {
      return this.http.get(this.baseUrl + '/localdrinks/');
        // return this.http.get('https://murmuring-bayou-72324.herokuapp.com/localdrinks')
  }

}
