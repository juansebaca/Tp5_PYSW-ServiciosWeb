import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tts.component.html',
  styleUrl: './tts.component.css'
})
export class TtsComponent {
  texto: string = '';
  idiomaSeleccionado: string = 'es-ES';
  hablando: boolean = false;
  error: string = '';

  idiomas = [
    { codigo: 'es-ES', nombre: '🇪🇸 Español (España)' },
    { codigo: 'es-AR', nombre: '🇦🇷 Español (Argentina)' },
    { codigo: 'en-US', nombre: '🇺🇸 English (US)' },
    { codigo: 'pt-BR', nombre: '🇧🇷 Português (Brasil)' },
    { codigo: 'fr-FR', nombre: '🇫🇷 Français' }
  ];

  hablar() {
    if (!this.texto.trim()) {
      this.error = 'Escribí un texto antes de generar la voz.';
      return;
    }
    if (!('speechSynthesis' in window)) {
      this.error = 'Tu navegador no soporta síntesis de voz.';
      return;
    }

    this.error = '';
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(this.texto);
    utterance.lang = this.idiomaSeleccionado;
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => { this.hablando = true; };
    utterance.onend = () => { this.hablando = false; };
    utterance.onerror = () => {
      this.hablando = false;
      this.error = 'Error al reproducir la voz. Intentá de nuevo.';
    };

    window.speechSynthesis.speak(utterance);
  }

  detener() {
    window.speechSynthesis.cancel();
    this.hablando = false;
  }

  limpiar() {
    this.detener();
    this.texto = '';
    this.error = '';
  }
}