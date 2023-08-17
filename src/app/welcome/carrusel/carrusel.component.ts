import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore from 'swiper';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent  implements OnInit {
  public slides = [
    {
      id: 1,
      name: "carlos",
      icon: "../../../assets/images/autobus.png"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
