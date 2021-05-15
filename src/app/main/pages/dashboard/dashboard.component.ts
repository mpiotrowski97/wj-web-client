import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'wj-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3, 2, 4, 5, 2, 3, 4],
      type: 'line',
    }],
    title: {
      text: 'Your work progress'
    }
  };
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;
  chartCallback: Highcharts.ChartCallbackFunction = chart => {
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
