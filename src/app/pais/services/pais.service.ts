import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor( private http: HttpClient) { }

  //Los observables son servicios que se consumen cuando se inyectan
  //el .subscbribe() se utiliza en el componente o modulo donde se ejecuta la peticion

  buscarPais(termino:string): Observable<Country[]>{
   const url = `${this.apiUrl}/name/${termino}`
  
  //Solo hay que devolver la peticion en el return 
   return this.http.get<Country[]>(url)

   }
  }
  

