import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AutosComponent } from './components/autos/autos.component';
import { ConversorComponent } from './components/conversor/conversor.component';
import { TtsComponent } from './components/tts/tts.component';
import { QrComponent } from './components/qr/qr.component';

export const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'autos', component: AutosComponent },
  { path: 'conversor', component: ConversorComponent },
  { path: 'tts', component: TtsComponent },
  { path: 'qr', component: QrComponent },
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' }
];