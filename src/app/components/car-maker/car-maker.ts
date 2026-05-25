import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSpecsService } from '../../services/car-specs';

@Component({
  selector: 'app-car-maker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-maker.html'
})
export class CarMakerComponent implements OnInit {
  marcas: any[] = [];
  modelosSeleccionados: any[] = [];
  marcaActual: string = '';
  cacheModelos: { [key: string]: any[] } = {};
  mostrarModal: boolean = false;

  constructor(private carService: CarSpecsService) {}

  ngOnInit() {
    this.carService.getMarcas().subscribe((data: any) => this.marcas = data);
  }

  verModelos(marca: string) {
    this.marcaActual = marca;
    if (this.cacheModelos[marca]) {
      this.modelosSeleccionados = this.cacheModelos[marca];
      this.mostrarModal = true;
    } else {
      this.carService.getModelos(marca).subscribe((data: any) => {
        this.cacheModelos[marca] = data;
        this.modelosSeleccionados = data;
        this.mostrarModal = true;
      });
    }
  }
}