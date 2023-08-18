import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent  implements OnInit {
  public slides = [
    {
      id: 0,
      name: "Ubica tu ruta",
      subname: "Registrate y mejora la calidad de tu movilidad",
      icon: "../../../assets/images/autobus.png"
    },
    { 
      id: 1,
      name: "Consulta los precios",
      subname: "Paga de anticipado y sube a los transportes que quieras",
      icon: "../../../assets/images/coin.png"
    },
    {
      id: 2,
      name: "Conoce los paraderos",
      subname: "Te mostramos el paradero más cercano a tu ubicación",
      icon: "../../../assets/images/parada.png"
    }
  ]
  swiperConfig: any = {
    allowTouchMove: true,
    pagination: true,

  }
  constructor() { }

  ngOnInit() {}

}
