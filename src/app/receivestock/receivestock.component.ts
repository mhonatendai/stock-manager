import { Component } from '@angular/core';
import {CarService} from "../common/car-service";
import {Car} from "../common/car-model";

@Component({
  selector: 'app-employees',
  templateUrl: './receivestock.component.html',
  styleUrls: ['./receivestock.component.scss']
})
export class ReceivestockComponent {


  constructor(private carService: CarService) {
  }

  cars: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }


}
