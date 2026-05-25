import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];
  peliculasFiltradas: Pelicula[] = [];
  textoBusqueda: string = '';
  cargando: boolean = false;
  error: string = '';

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    // LLAMADA REAL A LA API
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.cargando = true;
    this.error = '';

    this.peliculasService.getPeliculas().subscribe({
      next: (datos) => {
        this.peliculas = datos;
        this.peliculasFiltradas = datos;
        this.cargando = false;
      },
      error: (err) => {
        this.error = `❌ Error al conectar con el servidor. Revisá tu API Key.`;
        this.cargando = false;
        console.error(err);
      }
    });
  }

  filtrarPeliculas(): void {
    if (!this.textoBusqueda.trim()) {
      this.peliculasFiltradas = this.peliculas;
      return;
    }
    this.peliculasFiltradas = this.peliculas.filter(p =>
      p.title.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }
}