import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit,AfterViewInit {

  @Input() nodes ;

  constructor() { }

  ngOnInit(): void {
    // console.log('1',this.nodes)
  }
  ngAfterViewInit(){
    // console.log('node', this.nodes)
  }
}
