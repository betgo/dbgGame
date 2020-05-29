import { Component, OnInit } from '@angular/core';


interface Tree {
  name: string;
  icon?: string;
  id?: string;
  children?: Tree[];
}

@Component({
  selector: 'app-html-tree',
  templateUrl: './html-tree.component.html',
  styleUrls: ['./html-tree.component.scss']
})
export class HtmlTreeComponent implements OnInit {

  trees: Tree[] = [{
    name: 'a',
    children: [
      { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
      {
        name: 'b',
        children: [{
          name: 'c', children: [{ name: 'g' }]
        }, { name: 'd' },]
      }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
    ],
  },];
  constructor() { }

  ngOnInit(): void {
    console.log(this.trees)
  }

}
