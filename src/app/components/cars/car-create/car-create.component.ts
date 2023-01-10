import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {Category} from "../../../models/category";
import {NgForm} from "@angular/forms";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
  providers: [CarService, CategoryService]
})
export class CarCreateComponent implements OnInit {

  public Editor: any = ClassicEditor;
  categories: Category[] = [];
  error: string = "";
  // Two-way Binding
  model: any = {
    categoryId: "0",
  };
  constructor(private carService: CarService,
              private categoryService: CategoryService,
              private router: Router
  ) {
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  saveProduct(form: NgForm) {
    const extensions = ["jpeg","jpg","png"];
    const extension = this.model.imageUrl.split(".").pop();
    if (extensions.indexOf(extension) == -1) {
      this.error = "Resim uzantısı sadece jpeg, jpg, png olmalıdır.";
      return;
    }
    if (this.model.categoryId == "0") {
      this.error = "Kategori seçmelisiniz";
      return;
    }
    const car = {
      id: 1,
      name: this.model.name,
      model: this.model.model,
      year: this.model.year,
      price: this.model.price,
      km: this.model.km,
      engine_power: this.model.engine_power,
      engine_volume: this.model.engine_volume,
      color: this.model.color,
      imageUrl: this.model.imageUrl,
      description: this.model.description,
      isActive: this.model.isActive,
      categoryId: this.model.categoryId
    }
    if (form.valid) {
      this.carService.createCar(car).subscribe(data => {
        this.router.navigate(['cars']);
      });
    }
    else {
      this.error = "Formu kontrol ediniz.";
    }
    console.log(this.model);
  }
}

