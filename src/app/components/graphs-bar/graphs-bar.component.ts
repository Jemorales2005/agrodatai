import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
//import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphs-bar',
  templateUrl: './graphs-bar.component.html',
  styleUrls: ['./graphs-bar.component.css']
})
export class GraphsBarComponent implements OnInit {
  @Input() ArrayData: Array<any> ;
  @Input() ArrayLabels: Array<any> ;

public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Array<any> = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    let _ArrayData:Array<any> = new Array(this.ArrayData.length);
     for (let i = 0; i < this.ArrayData.length; i++) {
      _ArrayData[i] = {data: new Array(this.ArrayData[i].data.length), label: this.ArrayData[i].label};
        for (let j = 0; j < this.ArrayData[i].data.length; j++) {
          _ArrayData[i].data[j] = this.ArrayData[i]['data'][j];
        }
     }
     this.barChartData = _ArrayData;

     let _ArrayLabels:Array<any> = [];
     for (let i = 0; i < this.ArrayLabels.length; i++) {
         _ArrayLabels.push(this.ArrayLabels[i]);
        }
     this.barChartLabels = _ArrayLabels;
  }

  // events
  public chartClicked({ event, active }) {
    console.log(event, active);
  }

  public chartHovered({ event, active }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
