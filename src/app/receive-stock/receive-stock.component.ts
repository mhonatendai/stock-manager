import { Component } from '@angular/core';
import {CarService} from "../common/car-service";
import {Car} from "../common/car-model";

@Component({
  selector: 'app-employees',
  templateUrl: './receive-stock.component.html',
  styleUrls: ['./receive-stock.component.scss']
})
export class ReceiveStockComponent {


  constructor(private carService: CarService) {
  }

  cars: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }


}
