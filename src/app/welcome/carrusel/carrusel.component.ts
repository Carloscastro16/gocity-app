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
      name: "Ubica tu ruta",
      subname: "Registre y mejora la calidad de tu movilidad",
      icon: "../../../assets/images/autobus.png"
    },
    { 
      id: 2,
      name: "Consulta los precios",
      subname: "Registre y mejora la calidad de tu movilidad",
      icon: "../../../assets/images/coin.png"
    },
    {
      id: 3,
      name: "Conoce los paraderos",
      subname: "Registre y mejora la calidad de tu movilidad",
      icon: "../../../assets/images/parada.png"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
