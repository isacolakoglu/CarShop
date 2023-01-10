import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CarModel } from 'src/app/components/cars/car.model';
import {CarService} from "../car.service";


@Component({
  selector: 'app-all-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit{

  car: CarModel | undefined;

  constructor(private route: ActivatedRoute,
              private carService: CarService
  ) {}



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["carId"];

      this.carService.getCarById(id).subscribe(result => {
        this.car = { ...result, id: id}
      });
    })
  }


  getCars() {

  }


}
