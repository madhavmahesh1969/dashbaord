import { GCB } from './google-charts-base.service';
import { Injectable } from '@angular/core';
///import { PieChartConfig } from '../model/PieChartConfig';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GCB {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: {title: string,
                        pieHole: number}) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}