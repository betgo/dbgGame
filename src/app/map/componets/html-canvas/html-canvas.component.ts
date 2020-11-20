import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import PoissonDiskSampling from 'poisson-disk-sampling';
@Component({
  selector: 'app-html-canvas',
  templateUrl: './html-canvas.component.html',
  styleUrls: ['./html-canvas.component.scss']
})
export class HtmlCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef<any>;
  @ViewChild('container', { static: false }) container: ElementRef;
  constructor(
    // private poissodisksampling: PoissonDiskSampling
  ) { }

  ngOnInit(): void {
    console.log(this.canvas);
    console.log(this.container);
  }
  ngAfterViewInit() {
  //   console.log(this.canvas);
  //   console.log(this.container);
  //   this.canvas.nativeElement.width = '500'
  //   this.canvas.nativeElement.height = '500'
  //   let ctx: CanvasRenderingContext2D = this.canvas.nativeElement.getContext('2d');
  //   console.log(ctx);
  //   let canvasSize =500

  //   // ctx.width ='500px'

  //   ctx.fillStyle = 'black';

  //   // Poisson Disk Sampling
  //   let pdsObj = new PoissonDiskSampling({
  //     shape: [canvasSize * 0.9, canvasSize * 0.9],
  //     minDistance: 40,
  //     maxDistance: 80,
  //     tries: 20
  //   }, Math.random)
  //   let startPoint = [canvasSize * 0.45, canvasSize * 0.9]
  //   let endPoint = [canvasSize * 0.45, 0]
  //   pdsObj.addPoint(startPoint)
  //   pdsObj.addPoint(endPoint)
  //   let points = pdsObj.fill().filter(p => {
  //     return dist(...p, canvasSize * 0.45, canvasSize * 0.45) <= canvasSize * 0.45
  //   })
  //   for (var i = 0; i < points.length - 1; i++) {
  //     ctx.fillRect(Math.round(points[i][0]), Math.round(points[i][1]), 1, 1)
  //   }
  //   console.log(points);
  // }

}
