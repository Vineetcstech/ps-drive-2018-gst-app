import { Component, OnInit } from '@angular/core';

import {PanelModule} from 'primeng/panel';

import {OrderListModule} from 'primeng/orderlist';

import {ButtonModule} from 'primeng/button';



@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
	list1: any[];

  constructor() { }//private product:Products

  ngOnInit() {
	 // this.product.getProductd().then(this.list1 = list1); //initialize list 1
  }

}
