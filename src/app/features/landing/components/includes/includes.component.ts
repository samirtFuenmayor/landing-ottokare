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

    if (this.activeIndex === index) {
      this.activeIndex = null;
  
      this.fade = true;
  
      setTimeout(() => {
        this.currentImage = 'assets/images/sections/includes/que-incluye-img-desktop.webp';
        this.fade = false;
      }, 400);
  
      return;
    }
  
    this.activeIndex = index;
  
    this.fade = true;
  
    setTimeout(() => {
      this.currentImage = this.images[index];
      this.fade = false;
    }, 200);
  
  }
}