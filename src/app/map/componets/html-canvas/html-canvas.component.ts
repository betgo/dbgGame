import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html-canvas',
  templateUrl: './html-canvas.component.html',
  styleUrls: ['./html-canvas.component.scss']
})
export class HtmlCanvasComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('container', { static: false }) container: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.canvas);
    console.log(this.container);
  }
  ngAfterViewInit(){
    console.log(this.canvas);
    console.log(this.container);
    let ctx = this.canvas.nativeElement.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }

}
