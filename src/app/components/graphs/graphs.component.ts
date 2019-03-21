import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})

export class GraphsComponent implements OnInit {
  @Input() ArrayData: Array<any> ;
  @Input() ArrayLabels: Array<any> ;
 // @Input() datosGraph: Array<any> ;

  constructor(){

   }

  ngOnInit() {
    /*
       console.log(this.datosGraph);
       let _ArrayData:Array<any> = new Array(this.datosGraph.['dataArray'].length);
     for (let i = 0; i < this.datosGraph.['dataArray'].length; i++) {
      _ArrayData[i] = {data: new Array(this.datosGraph.['dataArray'][i].data.length), label: this.datosGraph.['dataArray'][i].label};
        for (let j = 0; j < this.ArrayData[i].data.length; j++) {
          _ArrayData[i].data[j] = this.ArrayData[i]['data'][j];
        }
     }
     this.lineChartData = _ArrayData;

     let _ArrayLabels:Array<any> = [];
     for (let i = 0; i < this.ArrayLabels.length; i++) {
         _ArrayLabels.push(this.ArrayLabels[i]);
        }
     this.lineChartLabels = _ArrayLabels;*/
     let _ArrayData:Array<any> = new Array(this.ArrayData.length);
     for (let i = 0; i < this.ArrayData.length; i++) {
      _ArrayData[i] = {data: new Array(this.ArrayData[i].data.length), label: this.ArrayData[i].label};
        for (let j = 0; j < this.ArrayData[i].data.length; j++) {
          _ArrayData[i].data[j] = this.ArrayData[i]['data'][j];
        }
     }
     this.lineChartData = _ArrayData;

     let _ArrayLabels:Array<any> = [];
     for (let i = 0; i < this.ArrayLabels.length; i++) {
         _ArrayLabels.push(this.ArrayLabels[i]);
        }
     this.lineChartLabels = _ArrayLabels;

  }

// lineChart
  public lineChartLabels:Array<any>;
  public lineChartData :Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(255,0,0,0.6)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(0,0,255,0.6)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
