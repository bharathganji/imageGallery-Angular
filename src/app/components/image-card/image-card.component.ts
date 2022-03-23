import { Component, Input, OnInit } from '@angular/core';

declare const viewGallery: any;

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
})
export class ImageCardComponent implements OnInit {
  constructor() {}
  @Input() image!: any;
  @Input() index!: any;
  ngOnInit(): void {}

  openGallery() {
    viewGallery();
  }

  color: string = '';
  toggleFavorite(param: any) {
    if (this.color == '') this.color = 'warn';
    else this.color = '';
  }

  contactWhatsapp(param: any) {
    const whatsapp = `https://wa.me/9494963066?text=${param.image.url}`;
    window.open(whatsapp, '_blank');
  }
}
