import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entries = [
    {
      url: '/todo',
      name: 'Stap Tasks',
      icon: 'assignment',
      desc: 'a simple todo list',
      img: './assets/img/Liste.svg'
    },
    {
      url: '/ship',
      name: 'Stap Ship',
      icon: 'anchor',
      desc: 'about ship of the line...'
    },
    {
      url: '/home',
      name: 'Stap Plan',
      icon: 'fact_check',
      desc: 'A planning env'
    },
    {
      url: '/home',
      name: 'Stap Math',
      icon: 'table_view',
      desc: 'a mathematical design sheet with equations and variable'
    },
    {
      url: '/world3d',
      name: 'Stap World',
      icon: 'table_view',
      desc: 'a place to create a 3D world... and tools',
      img: './assets/img/3dworld.png'
    },
    {
      url: '/home',
      name: 'Stap NoCode',
      icon: 'integration_instructions',
      desc: 'experimental no code collaborative env'
    },
    {
      url: '/home',
      name: 'Stap Mind',
      icon: 'view_carousel',
      desc: 'A 2D mind map backed with minddb'
    },
    {
      url: '/home',
      name: 'Stap Mind3D',
      icon: 'language',
      desc: 'A 3D mind map backed with minddb'
    },
    {
      url: '/home',
      name: 'Stap Mail',
      icon: 'all_inbox',
      desc: 'a mail box?'
    },
    {
      url: '/home',
      name: 'Stap Admin',
      icon: 'admin_panel_settings',
      desc: 'a dashboard for all the crap'
    }
  ];z

  constructor() { }

  ngOnInit(): void {
  }

}
