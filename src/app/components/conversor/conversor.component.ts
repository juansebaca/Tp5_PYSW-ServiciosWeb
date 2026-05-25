import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service'; 

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.component.html'
})
export class ConversorComponent {
  cantidad: number = 100;
  origen: string = 'USD';
  destino: string = 'ARS';
  resultado: number | null = null;

  constructor(private currencyService: CurrencyService) {}

  convertir() {
    this.currencyService.convertir(this.origen, this.destino, this.cantidad).subscribe(res => {
      // FIX APLICADO: Accedemos al valor numérico correcto
      this.resultado = res.conversion_result; 
    });
  }
}