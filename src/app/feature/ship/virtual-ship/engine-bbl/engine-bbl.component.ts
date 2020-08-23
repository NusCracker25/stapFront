import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineBBLService } from './engine-bbl.service';

@Component({
  selector: 'stap-engine-bbl',
  templateUrl: './engine-bbl.component.html',
  styleUrls: ['./engine-bbl.component.scss']
})
export class EngineBBLComponent implements OnInit {

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EngineBBLService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
