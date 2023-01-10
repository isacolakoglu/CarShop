import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CarService} from "../cars/car.service";
import {AuthService} from "../../services/auth.service";
import {AuthComponent} from "../auth/auth.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [CarService]
})
export class NavbarComponent implements OnInit{

  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  isLoginMode: boolean = true;
  isUser: boolean = false;

  constructor(
    private http: HttpClient,
    private carService: CarService,
    private authService: AuthService,
    private router: Router)
  {

  }
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log('user navbar',user);
      this.isAdmin = user?.email == "isa@admin.com"
    })

    this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })

  }
  //CANER BEY'İN YAZDIĞI KOD
  // navigateTo(type: String):void{
  //   switch (type)
  //   {
  //     case "login":
  //       this.router.navigate(['/uyeol']);
  //       break;
  //
  //     default:
  //       this.router.navigate(['/uyeol']);
  //         break;
  //   }

  logout() {
    this.authService.logout();
  }
}
