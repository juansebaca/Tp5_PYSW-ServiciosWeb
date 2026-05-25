import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CarSpecsService {
  private apiKey = 'fe5fc57d8emsh1b4ad0b892c2419p188711jsn134cc2608856';
  private host = 'car-specs-api.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.host
    });
  }

  getMarcas() {
    return this.http.get(`https://${this.host}/brands`, { headers: this.getHeaders() });
  }

  getModelos(marca: string) {
    return this.http.get(`https://${this.host}/models?brand=${marca}`, { headers: this.getHeaders() });
  }
}