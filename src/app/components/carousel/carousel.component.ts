import {Component, OnInit} from '@angular/core';
import {CarouselService} from "../../services/carousel.service";
import {Carousel} from "../../models/carousel";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit {

  carousel: Carousel;

  constructor(private carouselService: CarouselService,
              private http: HttpClient) {

  }

  ngOnInit(): void {
  }



}
