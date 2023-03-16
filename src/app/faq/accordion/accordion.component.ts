import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VraagData } from '../vraagdata.interface';

@Component({
  selector: 'faq-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss']
})

export class AccordionComponent {
  vraagItemOpen: boolean = false;

  @Input()
  vraagItem: VraagData = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  };

  toggleItem() {
    this.vraagItemOpen = !this.vraagItemOpen;
  }
}