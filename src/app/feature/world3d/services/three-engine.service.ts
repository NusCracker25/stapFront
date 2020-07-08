// import * as THREE from 'three';
import * as THREE_F from 'three-full';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ThreeEngineService implements OnDestroy {
  private canvas: HTMLCanvasElement;
  private renderer: THREE_F.WebGLRenderer;
  private camera: THREE_F.PerspectiveCamera;
  private scene: THREE_F.Scene;

  private light: THREE_F.AmbientLight;

  private orbit: THREE_F.OrbitControls;


  private cube: THREE_F.Mesh;
  private refPlane = true;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

     // ...then set the internal size to match
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    this.renderer = new THREE_F.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(canvas.nativeElement.width, canvas.nativeElement.height);

    // create the scene
    this.scene = new THREE_F.Scene();

    this.camera = new THREE_F.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );

    // controls
    this.setControl();

    this.camera.position.z = 5;
    this.scene.add(this.camera);

    this.setLights();

    this.geometryPlane();

    this.content();

  }

  public content(): void {
    const geometry = new THREE_F.BoxGeometry(1, 1, 1);
    const material = new THREE_F.MeshBasicMaterial({ color: 0x01ff00 });
    this.cube = new THREE_F.Mesh( geometry, material );
    this.scene.add(this.cube);
  }

  public setLights(): void {
    // soft white light
    this.light = new THREE_F.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);
  }

  public setControl(): void {
    this.orbit = new THREE_F.OrbitControls( this.camera, this.renderer.domElement );
  }

  public geometryPlane(): void {
    if ( !this.refPlane){
      return;
    }
    const planeGeometry = new THREE_F.PlaneBufferGeometry( 2000, 2000 );
    planeGeometry.rotateX( - Math.PI / 2 );
    const planeMaterial = new THREE_F.ShadowMaterial( { opacity: 0.2 } );

    const plane = new THREE_F.Mesh( planeGeometry, planeMaterial );
    plane.position.y = - 200;
    plane.receiveShadow = true;
    this.scene.add( plane );

    const helper = new THREE_F.GridHelper( 2000, 100 );
    helper.position.y = - 199;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;
    this.scene.add( helper );
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    // todo: behavior on resize is erratic. this must be fixed
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';

     // ...then set the internal size to match
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    const width = this.canvas.width;
    const height = this.canvas.height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }
}
