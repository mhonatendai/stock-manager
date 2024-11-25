import {Component, OnInit} from '@angular/core';
import {Car} from "../common/car-model";
import {CarService} from "../common/car-service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{

  constructor(private carService: CarService) {
  }

  cars: Car[] = [];

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

}
