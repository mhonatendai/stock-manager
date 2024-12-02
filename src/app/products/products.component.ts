import { Component } from '@angular/core';
import {CarService} from "../common/car-service";
import {Car} from "../common/car-model";

@Component({
  selector: 'app-employees',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  constructor(private carService: CarService) {
  }

  cars: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }


}
