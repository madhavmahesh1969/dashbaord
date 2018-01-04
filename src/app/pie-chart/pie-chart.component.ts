import { Component, Input, OnInit } from '@angular/core';
import { GooglePieChartService } from '../service/google-pie-chart.service';
//ximport { PieChartConfig } from '../model/PieChartConfig';

declare var google: any;

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: {title: string,
                        pieHole: number}
    @Input() elementId: string;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}
