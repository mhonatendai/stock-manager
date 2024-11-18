import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {

  CARS = [
    {
      brand: 'Audi',
      model: 'A4',
      year: 2018
    }, {
      brand: 'Audi',
      model: 'A5 Sportback',
      year: 2021
    }, {
      brand: 'BMW',
      model: '3 Series',
      year: 2015
    }, {
      brand: 'BMW',
      model: '4 Series',
      year: 2017
    }, {
      brand: 'Mercedes-Benz',
      model: 'C Klasse',
      year: 2016
    }
  ];

}
