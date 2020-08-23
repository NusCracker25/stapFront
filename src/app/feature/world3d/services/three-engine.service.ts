import { NGXLogger } from 'ngx-logger';
// import * as THREE from 'three';
import * as THREE_F from 'three-full';
import { Injectable, ElementRef, OnDestroy, NgZone} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThreeEngineService implements OnDestroy {
  // reference to canvas to draw in
  private canvas: HTMLCanvasElement;
  // basic renderer
  private renderer: THREE_F.WebGLRenderer;
  // scene constituents
  private camera: THREE_F.PerspectiveCamera;
  private scene: THREE_F.Scene;
  private screenSize = 1.0;
  private aspectRatio: number;

  private light: THREE_F.AmbientLight;

  private orbit: THREE_F.OrbitControls;

  private cube: THREE_F.Mesh;
  private refPlane = true;

  private skyB = 'clouds';

  private frameId: number = null;

  public constructor(private ngZone: NgZone, private logger: NGXLogger) {}

  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }



  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;
    this.renderer = new THREE_F.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // create the scene
    this.scene = new THREE_F.Scene();

    this.camera = new THREE_F.PerspectiveCamera(
      75,
      this.canvas.clientWidth / this.canvas.clientHeight,
      0.1,
      1000
    );

    // controls
    this.setControl();

    this.camera.position.z = 5;
    this.scene.add(this.camera);

    this.setLights();

    this.geometryPlane();

    this.content();

    this.skybox();
  }

  /**
   * create the sky box
   */
  private skybox() {
    this.scene.background = new THREE_F.CubeTextureLoader()
      .setPath('/assets/w3d/textures/sky/' + this.skyB + '/')
      .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
  }

  public content(): void {
    const texture1 = new THREE_F.TextureLoader().load(
      './assets/w3d/textures/lib/crate.jpg'
    );
    //let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material = new THREE_F.MeshBasicMaterial({
      map: texture1,
      side: THREE_F.DoubleSide,
    });
    const geometry = new THREE_F.BoxBufferGeometry(10, 10, 10);

    // const geometry = new THREE_F.BoxGeometry(1, 1, 1);
    // const material = new THREE_F.MeshBasicMaterial({ color: 0x01ff00 });
    this.cube = new THREE_F.Mesh(geometry, material);
    this.scene.add(this.cube);
  }

  public setLights(): void {
    // soft white light
    this.light = new THREE_F.AmbientLight(0x404040);
    this.light.position.z = 10;
    this.scene.add(this.light);
  }

  public setControl(): void {
    this.orbit = new THREE_F.OrbitControls(
      this.camera,
      this.renderer.domElement
    );
  }

  public geometryPlane(): void {
    if (!this.refPlane) {
      return;
    }
    const planeGeometry = new THREE_F.PlaneBufferGeometry(2000, 2000);
    planeGeometry.rotateX(-Math.PI / 2);
    const planeMaterial = new THREE_F.ShadowMaterial({ opacity: 0.2 });

    const plane = new THREE_F.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -200;
    plane.receiveShadow = true;
    this.scene.add(plane);

    const helper = new THREE_F.GridHelper(2000, 100);
    helper.position.y = -199;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;
    this.scene.add(helper);
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
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.resize();
      });
      this.canvas.addEventListener('resize' , () =>{
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.resize();
      })
    });
  }

  public render(): void {
    /* if (this.resizeRendererToDisplaySize()) {
      this.logger.log('div is resized');
    } */
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
   // ...then set the internal size to match
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
   //this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, true);
    this.renderer.setPixelRatio((this.canvas.clientWidth) / (this.canvas.clientHeight));
    this.camera.updateProjectionMatrix();
  }


  public switchEdit(): void {
    this.orbit.enabled = false;
  }

  public switchNavigate(): void {
    this.orbit.enabled = true;
  }

  private resizeRendererToDisplaySize() {

    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const needResize =
      this.canvas.width !== width || this.canvas.height !== height;
    if (needResize) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }
    return false;
  }
}
