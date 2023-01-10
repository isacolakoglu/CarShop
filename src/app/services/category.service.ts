import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../models/category";
import {map, Observable} from "rxjs";


@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CategoryService {

  private url = "https://ng-carshop-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + "categories.json")
      .pipe(
        map(data => {
          const categories: Category[] = [];

          for(const key in data) {
            categories.push({ ...data[key], id: key })
          }

          return categories;
        })
      );
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.url + "categories.json", category);
  }

}
