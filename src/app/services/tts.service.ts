import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  private url = 'https://open-ai-text-to-speech1.p.rapidapi.com/';

  private headers = {
    'X-RapidAPI-Key': 'fe5fc57d8emsh1b4ad0b892c2419p188711jsn134cc2608856',
    'X-RapidAPI-Host': 'open-ai-text-to-speech1.p.rapidapi.com',
    'Content-Type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  generarAudio(texto: string, voz: string = 'alloy'): Observable<any> {
    const body = {
      model: 'tts-1',
      input: texto,
      voice: voz
    };
    return this.http.post<any>(this.url, body, { headers: this.headers });
  }
}