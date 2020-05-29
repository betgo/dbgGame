import { Component, OnInit, AfterViewInit } from '@angular/core';


interface Tree {
  name: string;
  icon?: string;
  id?: string;
  status?: string;
  children?: Tree[];
}

@Component({
  selector: 'app-html-tree',
  templateUrl: './html-tree.component.html',
  styleUrls: ['./html-tree.component.scss']
})
export class HtmlTreeComponent implements OnInit, AfterViewInit {

  trees: Tree[] = [{
    name: 'a',
    children: [
      { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
      {
        name: 'b',
        children: [
          { name: 'c', children: [{ name: 'g', id: 'g' }], status: 'start' },
          { name: 'd', children: [{ name: 'g', id: 'g' }], status: 'among' },]
      }, {
        name: 'c',
        children: [{
          name: 'c', children: [{ name: 'g', id: 'g' }], status: 'end'
        },]
      }, { name: 'd' }, { name: 'e' }, { name: 'f' },
    ],
  },];
  constructor() { }

  ngOnInit(): void {
    console.log(this.trees);

  }
  ngAfterViewInit() {
    this.patchDom();
  }
  patchDom() {
    const divs = document.getElementById
    console.log(divs);
  }
}
