import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, throwError} from "rxjs";
import {Carousel} from "../models/carousel";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  api_key = "AIzaSyBw2V6ZB1XKG1duVxqlwfnFqzUf1tgyuM0";

  url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";


  constructor(private http: HttpClient) {

  }


}
