import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nosotros',
  imports: [NgFor],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  carouselImages = [

  ];

  // Imágenes para la galería
  galleryImages = [
    { url: 'https://i.imgur.com/nxhJhT7.jpeg', alt: 'Foto 1' },
    { url: 'https://i.imgur.com/lJ6Rgr0.jpeg', alt: 'Foto 2' },
    { url: 'https://i.imgur.com/b8ZTezC.jpeg', alt: 'Foto 3' },
    { url: 'https://i.imgur.com/QloC30h.jpeg', alt: 'Foto 4' },
  ];

  // Imagen seleccionada para el modal
  selectedImage: string = '';

  constructor(private modalService: NgbModal) {}

  // Función para abrir el modal
  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.modalService.open(document.getElementById('imageModal'), {
      size: 'lg',
    });
  }
}
