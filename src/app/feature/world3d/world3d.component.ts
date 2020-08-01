import { NGXLogger } from 'ngx-logger';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, OnChanges } from '@angular/core';

import {ThreeEngineService} from './services/three-engine.service';
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'stap-world3d',
  templateUrl: './world3d.component.html',
  styleUrls: ['./world3d.component.scss']
})
export class World3dComponent implements OnInit, AfterViewInit, OnChanges {

  // reference to where rendering happens
  @ViewChild('canvas3D', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  private nclick = 0;
// trigger for dynamic menu
  @ViewChild(MatMenuTrigger, {static: false}) menu: MatMenuTrigger;
// dynamic menu position
  menuX = 0;
  menuY = 0;

  @HostListener('click', ['$event'])
  handleMClick(event: MouseEvent) {
    this.logger.log('details of mouse event ', event);
    event.preventDefault();
    if ( event.ctrlKey ){
      this.menuX = event.offsetX - 10;
      this.menuY = event.offsetY - 10;
      this.menu.closeMenu(); // close existing menu first.
      this.menu.openMenu();
    }
  }

  public constructor(
    private three: ThreeEngineService,
    private logger: NGXLogger
     ) { }

  public ngOnInit(): void {
    this.three.createScene(this.rendererCanvas);
    this.three.resize();
  }

  public ngAfterViewInit(): void{
    this.three.resize();
    this.three.animate();
  }
  public ngOnChanges(): void{
    this.three.resize();
  }

  public onClick(): void{
    this.logger.log('click: ', this.nclick++);
  }

  public menuSelect(command: string): void{
    this.logger.log('Command received ', command);
    switch (command){
      case 'Edit':
        this.three.switchEdit();
        break;
      case 'Navigate':
        this.three.switchNavigate();
        break;
    }
  }
}
