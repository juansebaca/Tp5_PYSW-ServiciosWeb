import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2 class="text-neon-cyber mb-4 text-center">🚗 MARCAS DE AUTOS</h2>
      <div class="row g-4">
        <div class="col-md-4" *ngFor="let marca of marcas">
          <div class="card card-cyber text-center p-4" style="cursor: pointer;" (click)="abrirModal(marca)">
            <h3 class="text-light fw-bold">{{ marca.nombre }}</h3>
            <span class="text-info">Ver modelos ➔</span>
          </div>
        </div>
      </div>

      <div class="modal fade show d-block" *ngIf="marcaSeleccionada" tabindex="-1" style="background: rgba(0,0,0,0.85);">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content card-cyber text-light">
            <div class="modal-header border-neon">
              <h5 class="modal-title text-neon-cyber">🤖 Modelos de {{ marcaSeleccionada.nombre }}</h5>
              <button type="button" class="btn-close btn-close-white" (click)="cerrarModal()"></button>
            </div>
            <div class="modal-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-transparent text-light border-secondary"
                    *ngFor="let modelo of marcaSeleccionada.modelos">
                  ⚡ {{ modelo }}
                </li>
              </ul>
            </div>
            <div class="modal-footer border-neon">
              <button type="button" class="btn btn-cyber-pink" (click)="cerrarModal()">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AutosComponent {
  marcas = [
    { nombre: 'Lamborghini', modelos: ['Aventador SVJ', 'Huracán Evo', 'Urus Performante', 'Revuelto', 'Countach LPI'] },
    { nombre: 'Ferrari', modelos: ['SF90 Stradale', 'LaFerrari', '812 Superfast', 'Purosangue', 'Roma Spider'] },
    { nombre: 'Porsche', modelos: ['911 GT3 RS', 'Taycan Turbo S', 'Cayenne Turbo', 'Macan EV', 'Panamera GTS'] },
    { nombre: 'BMW', modelos: ['M4 Competition', 'M5 CS', 'i8 Roadster', 'XM Label Red', 'M3 Touring'] },
    { nombre: 'Mercedes-Benz', modelos: ['AMG GT Black Series', 'Clase G 63', 'EQS 580', 'SL 63 AMG', 'GLE 63 S'] },
    { nombre: 'Aston Martin', modelos: ['Vantage V8', 'DBS 770 Ultimate', 'DBX707', 'DB12', 'Valkyrie'] },
    { nombre: 'McLaren', modelos: ['720S Spider', 'Artura', 'GT', '750S', 'Elva'] },
    { nombre: 'Bugatti', modelos: ['Chiron Super Sport', 'Veyron 16.4', 'Mistral', 'Bolide', 'Divo'] },
    { nombre: 'Rolls-Royce', modelos: ['Phantom VIII', 'Ghost Extended', 'Cullinan Black Badge', 'Spectre', 'Wraith'] }
  ];

  marcaSeleccionada: any = null;

  abrirModal(marca: any) {
    this.marcaSeleccionada = marca;
  }

  cerrarModal() {
    this.marcaSeleccionada = null;
  }
}