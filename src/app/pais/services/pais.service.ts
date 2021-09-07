import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Capital } from '../interfaces/capital.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';


  constructor(private http: HttpClient) { }

  ahorrarEspacio(){
    const httpParams = new HttpParams()
      .set('fields','name;nativeName;capital;population;alpha2Code;flag')
      return httpParams;
  }

  get HttpParams(){
    return new HttpParams().set('fields','name;nativeName;capital;population;alpha2Code;flag')
  }

  buscarPais(termino:string):Observable<Country[]>{
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params: this.HttpParams});
  }

  buscarCapital(termino:string):Observable<Capital[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Capital[]>(url,{params: this.HttpParams});
  }
  getPaisPorAlpha(id:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`
    return this.http.get<Country[]>(url,{params: this.HttpParams});
  }

}
