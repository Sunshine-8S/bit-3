import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Recetasapi {
  constructor() { }
  private httpClient = inject(HttpClient);
  private apiUrl = "https://www.themealdb.com/api/json/v1/1";

  getCategorias(){
    return this.httpClient.get(`${this.apiUrl}/list.php?c=list`)
  }

  getRecetas(categoria: string){
    return this.httpClient.get(`${this.apiUrl}/filter.php?c=${categoria}`)
  }

  getRecetaDetallada(id: string){
    return this.httpClient.get(`${this.apiUrl}/lookup.php?i=${id}`)
  }
}
