import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { GooglePieChartService } from './service/google-pie-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GoogleChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
