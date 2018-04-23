import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {OrderListModule} from 'primeng/orderlist';



import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
	OrderListModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
