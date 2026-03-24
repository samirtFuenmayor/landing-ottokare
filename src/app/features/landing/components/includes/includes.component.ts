import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-includes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './includes.component.html'
})
export class IncludesComponent {

  activeIndex: number | null = 0;

  images: string[] = [
    'assets/images/sections/includes/proteccion-med-img-desktop.webp',
    'assets/images/sections/includes/red-descuentos-img-desktop.webp',
    'assets/images/sections/includes/hospedaje-img-desktop.webp',
    'assets/images/sections/includes/servicio-exequial-img-desktop.webp'
  ];

  currentImage = 'assets/images/sections/includes/que-incluye-img-desktop.webp';
  fade = false;

  toggle(index: number) {
    // 1. Iniciar desvanecimiento de la imagen frontal
    this.fade = true;
  
    if (this.activeIndex === index) {
      // Caso: Cerrar el acordeón
      setTimeout(() => {
        this.activeIndex = null;
        this.currentImage = 'assets/images/sections/includes/que-incluye-img-desktop.webp';
        // Esperamos un momento extra antes de volver a mostrar la imagen
        setTimeout(() => this.fade = false, 50);
      }, 300); // Tiempo que tarda en ser invisible
      return;
    }
  
    // Caso: Cambiar a una nueva pestaña
    setTimeout(() => {
      this.activeIndex = index; 
      this.currentImage = this.images[index];
      
      // El secreto: No quitar el fade inmediatamente para que no haya parpadeo
      setTimeout(() => {
        this.fade = false;
      }, 100); 
    }, 300); 
  }
  
}