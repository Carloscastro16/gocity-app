import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss'],
})
export class TransportsComponent  implements OnInit {
  public routes = [
    {
      id: 1,
      route: 'Ruta 1',
      scheduleStart: '5:00',
      scheduleEnd: '22:30',
      scheduCompany: 'Autocar',
      scheduCompany2: 'Turicun',
      scheduCompany3: 'PlayaExpress',
      stops: [
        {
          name: '1',
          lat: 21.00000,
          lng: 81.00000,
        }
      ],
      base: {
        name: 'Ruta 1',
        lat: 21.00000,
        lng: 81.00000,
      },
      score: "4"
    },
    {
      id: 2,
      route: 'Ruta 2',
      scheduleStart: '6:00',
      scheduleEnd: '12:00',
      stops: [
        {
          name: '1',
          lat: 21.00000,
          lng: 81.00000,
        }
      ],
      base: {
        name: 'Ruta 1',
        lat: 21.00000,
        lng: 81.00000,
      },
      score: "4"
    },
    {
      id: 3,
      route: 'Ruta 5',
      scheduleStart: '8:00',
      scheduleEnd: '12:00',
      stops: [
        {
          name: '1',
          lat: 21.00000,
          lng: 81.00000,
        }
      ],
      base: {
        name: 'Ruta 1',
        lat: 21.00000,
        lng: 81.00000,
      },
      score: "4"
    },
  ];
  swiperConfig: any = {
    allowTouchMove: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      500:{
        slidesPerView: 2,
      }
    }
  }
  stars: any[] = [
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
    { icon: 'star-outline', color: 'medium' },
  ];
  optionSelected = 'Paraderos';
  selectedZone = 'Hotelera'
  constructor(
    private router: Router
  ) {}
  goTo(){
    this.router.navigate(['/tabs/tab1']);
  }
  ngOnInit() {}

  toggleStar(index: number) {
    const star = this.stars[index];
    if (star.icon === 'star') {
      star.icon = 'star-outline';
      star.color = 'medium';
    } else {
      star.icon = 'star';
      star.color = 'warning';
    }
  }
  selectOption(option: string){
    this.optionSelected = option;
  }
  selectZone(option: string){
    this.selectedZone = option;
  }
}


