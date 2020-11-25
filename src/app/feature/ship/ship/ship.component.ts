import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stap-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {


entries = [
    {
      url: '/todo',
      name: 'People',
      icon: 'assignment',
      desc: 'the people of marine',
      img: './assets/img/ship_line.png'
    },
    {
      url: '/ship',
      name: 'Ships',
      icon: 'anchor',
      desc: 'the ships and their history',
      img: './assets/img/ship_line.png'
    },
    {
      url: '/home',
      name: 'Books',
      icon: 'fact_check',
      desc: 'the reference books',
      img: './assets/img/ship_line.png'
    },
    {
      url: '/home',
      name: 'Glossary',
      icon: 'fact_check',
      desc: 'the glossary of ship of the line',
      img: './assets/img/ship_line.png'
    },
    {
      url: './duMonceauSheet',
      name: 'DHM 1758',
      icon: 'fact_check',
      desc: 'sizing the ship from Elements de la construction navale',
      img: './assets/img/ship_line.png'
    },
    {
      url: './vrShip',
      name: '3D Ship',
      icon: 'fact_check',
      desc: 'a 3D Ship under construction',
      img: './assets/img/ship_line.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
