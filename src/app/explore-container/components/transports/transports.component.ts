import { Component, OnInit } from '@angular/core';

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
      scheduleStart: '4:00',
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
      id: 2,
      route: 'Ruta 1',
      scheduleStart: '4:00',
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
      route: 'Ruta 1',
      scheduleStart: '4:00',
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
  ]
  constructor() { }

  ngOnInit() {}

}
