import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card card-cyber p-4 text-center">
          <h2 class="text-neon-cyber mb-4">📱 GENERADOR DE CÓDIGOS QR</h2>
          <div class="mb-4 text-start">
            <label class="form-label text-light">Contenido del QR (URL o Texto)</label>
            <input type="text" class="form-control bg-dark text-light border-neon" [(ngModel)]="datosQr">
          </div>
          <button class="btn btn-cyber-cyan w-100 py-2 mb-4" (click)="generarQr()">
            Generar Código QR
          </button>
          <div *ngIf="qrUrl" class="p-4 bg-white d-inline-block mx-auto rounded shadow-lg">
            <img [src]="qrUrl" alt="Código QR Generado" class="img-fluid" style="max-height: 200px;">
          </div>
        </div>
      </div>
    </div>
  `
})
export class QrComponent {
  datosQr: string = 'https://www.fi.unju.edu.ar';
  qrUrl: string | null = null;

  generarQr() {
    if (!this.datosQr.trim()) return;
    this.qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.datosQr)}`;
  }
}