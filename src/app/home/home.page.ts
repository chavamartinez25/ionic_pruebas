import { Component } from '@angular/core';
import { ANIMALES } from '../../app/data/data.animales';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  animales: any[] = [];
    constructor() {
      this.animales = ANIMALES.splice(0);
    }
}
