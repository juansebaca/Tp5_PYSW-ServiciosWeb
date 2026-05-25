import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey = 'nBd3FKi9Axba3LlQSE5VOLNPuXlBQ91a';

  constructor(private http: HttpClient) { }

  convertir(from: string, to: string, amount: number): Observable<any> {
    const url = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`;
    const headers = new HttpHeaders({
      'apikey': this.apiKey
    });
    return this.http.get(url, { headers });
  }
}