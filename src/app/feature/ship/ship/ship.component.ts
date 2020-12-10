import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stap-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit {


entries = [
    {
      url: './people',
      name: 'People',
      icon: 'assignment',
      desc: 'the people of marine',
      img: './assets/img/people/Henri_Louis_Duhamel_du_Monceau.jpg'
    },
    {
      url: './harbor',
      name: 'Ships',
      icon: 'anchor',
      desc: 'the ships and their history',
      img: './assets/img/ship_status.jpg'
    },
    {
      url: './bibliography',
      name: 'Books',
      icon: 'fact_check',
      desc: 'the reference books',
      img: './assets/img/books-cover.jpg'
    },
    {
      url: './glossary',
      name: 'Glossary',
      icon: 'fact_check',
      desc: 'the glossary of ship of the line',
      img: './assets/img/mast.jpeg'
    },
    {
      url: './duMonceauSheet',
      name: 'DHM 1758',
      icon: 'fact_check',
      desc: 'sizing the ship from Elements de la construction navale',
      img: './assets/img/DHM_1758.png'
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
