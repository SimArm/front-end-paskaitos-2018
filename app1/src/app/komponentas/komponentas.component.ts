import { Component, OnInit } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { getComponent } from '@angular/core/src/linker/component_factory_resolver';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-komponentas',
  templateUrl: './komponentas.component.html',
  styleUrls: ['./komponentas.component.css']
})
export class KomponentasComponent implements OnInit {
  uzduotisName : string ='uzduotis';
  uzduociuList='tuscia';
  uzduotys = ['pirma', 'antra'];
  uzduotisDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdateList(event: Event) {
    this.uzduotisName = (<HTMLInputElement>event.target).value;
  }

  onCreateList(){
    this.uzduociuList = this.uzduotisName;
    this.uzduotys.push(this.uzduociuList);
  }

  onClick(){
    this.uzduotisDisabled = true;

  }
}
