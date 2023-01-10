import { Component, OnInit } from '@angular/core';
//import {CarRepository} from "../../../models/car.repository";
import {ActivatedRoute} from "@angular/router";
import {CarModel} from "../car.model";
import {CarService} from "../car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements OnInit{

  cars: CarModel[] = [];
  //carRepository: CarRepository;
  carList: any;
  id:number;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) {
    // HASAN BEY'İN YAZDIĞI KOD
    this.loading = true;
    this.route.params.subscribe(params=> {
      this.id = params['categoryId']
      this.getCars()
      this.loading = false;
      });

  }

  // HASAN BEYİN YAZDIĞI KOD
  ngOnInit(): void {
      this.getCars()
  }

  getCars(){
    if(this.id!=0){
      this.carService.getCars(this.id).subscribe(data => {
        this.cars = data;
      })
    }else{
      this.carService.getCars().subscribe(data => {
        this.cars = data;
      })
    }
  }





  // YAZDIĞIM YENİ KOD ÇALIŞTI AMA TÜM KATEGORİLERDE ARAÇLAR GÖZÜKMÜYOR.
  // ngOnInit(): void {
  //   this.route.params.subscribe(params =>{
  //     this.carService.getCars(params['categoryId']).subscribe(data => {
  //       this.all-car = data;
  //     })
  //   })
  // }
}


// YAZDIĞIM ESKİ KOD
  // ngOnInit(): void {
    //   this.route.params.subscribe(params=> {
    //     if(params["categoryId"]) {
    //       this.all-car = this.carRepository.getCarsByCategoryId(params["categoryId"]);
    //     }
    //     else
    //     {
    //       this.all-car = this.carRepository.getCars();
    //     }
    //   });
    // }




