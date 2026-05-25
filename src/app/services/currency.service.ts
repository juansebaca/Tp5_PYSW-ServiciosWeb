import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = '289afe36412117c7a0b55680';
  private baseUrl = 'https://v6.exchangerate-api.com/v6';

  constructor(private http: HttpClient) { }

  convertir(from: string, to: string, amount: number): Observable<any> {
    // La estructura de la API es: /v6/[API_KEY]/pair/[FROM]/[TO]/[AMOUNT]
    const url = `${this.baseUrl}/${this.apiKey}/pair/${from}/${to}/${amount}`;
    return this.http.get(url);
  }
}