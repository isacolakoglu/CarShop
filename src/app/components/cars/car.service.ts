import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarModel} from "./car.model";
import {Observable, map, tap, delay, take, exhaustMap} from "rxjs";
import {AuthService} from "../../services/auth.service";
// LOCAL SERVICE
@Injectable({
  providedIn: 'root'
})

export class CarService {

  private url = "https://ng-carshop-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getCars(categoryId?: number): Observable<CarModel[]> {
    return this.http
      .get<CarModel[]>(this.url +"cars.json")
      .pipe(
        map(data => {
          const cars: CarModel[] = [];

          for(const key in data) {
            if(categoryId) {
              if(categoryId == data[key].categoryId) {
                cars.push({ ...data[key], id: key  })
              }
            }
            else
            {
                cars.push({ ...data[key], id: key  })
            }
          }

          return cars;
          }),
        tap(data => console.log(data)),
        delay(500)
      );
  }
  getCarById(id: string): Observable<CarModel>{
    return this.http.get<CarModel>(this.url + "cars/" + id + ".json").pipe(delay(1000));
  }

  createCar(car: CarModel): Observable<CarModel> {

    return this.authService.user.pipe(
      take(1),
      tap(user => console.log(user)),
      exhaustMap(user => {
        return this.http.post<CarModel>(this.url + "cars.json?auth=" + user?.token, car);
      })
    )


  }



}
