import { Injectable } from '@angular/core';
import {Car} from "./car-model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() {}

  getCars(): Car[] {
    return [
      new Car(1, 'Toyota', 'Corolla', 2020),
      new Car(2, 'Honda', 'Civic', 2021),
      new Car(3, 'Ford', 'Mustang', 2019),
      new Car(4, 'Chevrolet', 'Camaro', 2022),
      new Car(5,'Nissan', 'Frontier', 2022),
      new Car(6,'Toyota', 'Highlander', 2024),
      new Car(7, 'Mazda', 'CX-50', 2023)
    ];
  }
}
