import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  selectedChartType: string = 'line';
  chartTypes = [
    { value: 'line', label: 'Line Chart' },
    { value: 'bar', label: 'Bar Chart' },
    { value: 'pie', label: 'Pie Chart' }
  ];

  dummyData = [
    { year: '2020', profit: 50000 },
    { year: '2021', profit: 75000 },
    { year: '2022', profit: 100000 },
    { year: '2023', profit: 90000 }
  ];

  ngOnInit() {
    this.renderChart();
  }

  onChartTypeChange() {
    this.renderChart();
  }

  renderChart() {
    switch (this.selectedChartType) {
      case 'line':
        this.renderLineChart();
        break;
      case 'bar':
        this.renderBarChart();
        break;
      case 'pie':
        this.renderPieChart();
        break;
    }
  }

  renderLineChart() {
    Highcharts.chart('chart', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Company Profits - Line Chart'
      },
      xAxis: {
        categories: this.dummyData.map(data => data.year)
      },
      yAxis: {
        title: {
          text: 'Profit'
        }
      },
      series: [
        {
          type: 'line', 
          name: 'Profit',
          data: this.dummyData.map(data => data.profit)
        }
      ]
    });
  }

  renderBarChart() {
    Highcharts.chart('chart', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Company Profits - Bar Chart'
      },
      xAxis: {
        categories: this.dummyData.map(data => data.year)
      },
      yAxis: {
        title: {
          text: 'Profit'
        }
      },
      series: [
        {
          type: 'bar', 
          name: 'Profit',
          data: this.dummyData.map(data => data.profit)
        }
      ]
    });
  }

  renderPieChart() {
    Highcharts.chart('chart', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Company Profits - Pie Chart'
      },
      series: [
        {
          type: 'pie', 
          name: 'Profit',
          data: this.dummyData.map(data => ({
            name: data.year,
            y: data.profit
          }))
        }
      ]
    });
  }
}
