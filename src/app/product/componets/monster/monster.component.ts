import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {


    @Input() key = '';
  constructor() { }

  ngOnInit() {
  }



}
