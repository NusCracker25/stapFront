import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import {ThreeEngineService} from './services/three-engine.service';


@Component({
  selector: 'stap-world3d',
  templateUrl: './world3d.component.html',
  styleUrls: ['./world3d.component.scss']
})
export class World3dComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas3D', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private three: ThreeEngineService ) { }

  public ngOnInit(): void {
    this.three.createScene(this.rendererCanvas);
  }

  public ngAfterViewInit(): void{
    this.three.resize();
    this.three.animate();
  }
}
