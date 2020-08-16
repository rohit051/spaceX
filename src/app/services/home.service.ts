import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../envioronments/environment'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private BASE_URL = environment.baseUrl;

  constructor(
    private http: HttpClient
    ) { }

    // service to get spaces on basis of query
    getSpaceX(query){
      console.log(this.BASE_URL + query);
      return this.http.get(this.BASE_URL + query);
    }
}
