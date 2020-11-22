import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import PoissonDiskSampling from 'poisson-disk-sampling';
import p5 from 'p5';
import Delaunator from 'delaunator';
// const Delaunator = require('delaunator')
import createGraph, { Graph } from 'ngraph.graph';
import { aStar } from 'ngraph.path';
@Component({
  selector: 'app-html-canvas',
  templateUrl: './html-canvas.component.html',
  styleUrls: ['./html-canvas.component.scss']
})
export class HtmlCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef<any>;
  @ViewChild('container', { static: false }) container: ElementRef;


  startPoint;
  endPoint;
  canvasSize = 500;
  points;
  graph: Graph;
  activePoints = []
  constructor(
    // private poissodisksampling: PoissonDiskSampling

  ) {
    this.graph = createGraph();
  }

  ngOnInit(): void {
    console.log(this.canvas);
    console.log(this.container);


  }
  ngAfterViewInit() {
    const sketch = (s: p5) => {

      s.preload = () => {
        // preload code
      };

      s.setup = () => {
        s.createCanvas(this.canvasSize, this.canvasSize);
        s.colorMode(s.HSB);
        s.noLoop();
        // Poisson Disk Sampling
        const pdsObj = new PoissonDiskSampling({
          shape: [this.canvasSize * 0.9, this.canvasSize * 0.9],
          minDistance: 40,
          maxDistance: 80,
          tries: 20
        }, Math.random);
        this.startPoint = [this.canvasSize * 0.45, this.canvasSize * 0.9];
        this.endPoint = [this.canvasSize * 0.45, 0];
        pdsObj.addPoint(this.startPoint);
        pdsObj.addPoint(this.endPoint);
        this.points = pdsObj.fill()
          .filter(p => {
            // @ts-ignore
            return s.dist(...p, this.canvasSize * 0.45, this.canvasSize * 0.45) <= this.canvasSize * 0.45;
          });

        const delaunay = Delaunator.from(this.points).triangles;
        const triangles = [];
        for (let i = 0; i < delaunay.length; i += 3) {
          triangles.push([
            this.points[delaunay[i]],
            this.points[delaunay[i + 1]],
            this.points[delaunay[i + 2]]
          ]);
        }
        for (const t of triangles) {
          this.graph.addLink(t[0], t[1], {
            // @ts-ignore
            weight: s.dist(...t[0], ...t[1])
          });
          this.graph.addLink(t[1], t[2], {
            // @ts-ignore
            weight: s.dist(...t[1], ...t[2])
          });
          this.graph.addLink(t[2], t[0], {
            // @ts-ignore
            weight: s.dist(...t[2], ...t[0])
          });
        }
      };

      s.draw = () => {
        s.noStroke();
        s.fill(40, 50, 60);
        s.rect(0, 0, this.canvasSize, this.canvasSize);
        s.push();
        s.strokeWeight(10);
        s.stroke(40, 80, 20);
        s.fill(0, 0);
        s.square(0, 0, this.canvasSize);
        s.pop();
        s.push();
        s.translate(this.canvasSize * 0.05, this.canvasSize * 0.05);

        for (let i = 0; i < this.canvasSize / 50; i++) {
          const pathFinder = aStar(this.graph, {
            distance(fromNode, toNode, link) {
              return link.data.weight;
            }
          });
          const foundPath = pathFinder.find(this.startPoint, this.endPoint);
          if (foundPath.length === 0) {
            break;
          }
          this.activePoints.push(...foundPath.map(obj => obj.id));

          s.stroke(40, 80.20);
          s.fill(40, 80, 20);
          // console.log(foundPath);

          for (let j = 1; j < foundPath.length; j++) {
            // @ts-ignore
            this.arrow(...foundPath[j].id, ...foundPath[j - 1].id, s);
          }
          const idx = Math.floor(s.random(1, foundPath.length - 1));
          this.graph.removeNode(foundPath[idx].id);
        }
        // Points
        s.stroke(0);
        s.textSize(16);
        s.textAlign(s.CENTER, s.CENTER);
        for (const p of new Set(this.activePoints)) {
          const pJSON = JSON.stringify(p);
          switch (pJSON) {
            case JSON.stringify(this.startPoint):
              // @ts-ignore
              s.text('😀', ...p);
              break;
            case JSON.stringify(this.endPoint):
              // @ts-ignore
              s.text('😈', ...p);
              break;
            default:
              // @ts-ignore
              s.text(s.random(Array.from('💀💀💀💰❓')), ...p);
          }
        }
        console.log(this.activePoints);
        console.log('start',this.startPoint,'end',this.endPoint);
        
        s.pop();
        s.noStroke();
        s.fill(40, 50, 60, 0.3);
        s.rect(0, 0, this.canvasSize, this.canvasSize);
        // for (let i = 0; i < this.points.length - 1; i++) {
        //   s.rect(Math.round(this.points[i][0]), Math.round(this.points[i][1]), 1, 1);
        // }
        // s.rect(100, 100, 100, 100);


      };
      s.mouseClicked = (event) => {
        // console.log(s.mouseX, s.mouseY);
        // console.log(s.dist(0, 0, s.mouseX, s.mouseY));
        for (const p of new Set(this.activePoints)) {
          if (s.dist(p[0]+20, p[1]+20, s.mouseX, s.mouseY) < 10) {
            console.log('point',p[0],p[1]);
          }
        }

      };
    };


    const canvas = new p5(sketch, this.container.nativeElement);
  }

  arrow(x1, y1, x2, y2, s: p5, arrowSize = 6) {
    const vec = s.createVector(x2 - x1, y2 - y1);
    const len = vec.mag();
    vec.mult((len - 10) / len);
    s.push();
    s.translate(x1, y1);
    //#region dottedLine
    s.push();
    const fragment = 5;
    s.translate(0, 0);
    for (let i = Math.floor(len * 0.5 / fragment); i >= 0; i--) {
      if (i == 0 && Math.floor(len / fragment) % 2 == 0) {
        vec.normalize().mult(len % fragment);
      } else {
        vec.normalize().mult(fragment);
      }
      s.line(0, 0, vec.x, vec.y);
      vec.mult(2);
      s.translate(vec.x, vec.y);
    }
    s.pop();
    //#endregion
    s.rotate(vec.heading());
    s.translate(vec.mag() - arrowSize, 0);
    s.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    s.pop();
  }

}
