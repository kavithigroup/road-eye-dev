// Using apex chart library for analytics for admin

import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexMarkers,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels,
} from 'ng-apexcharts';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.sass']
})
export class AnalyticsComponent {

  public lineChartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    yaxis: ApexYAxis;
    markers: ApexMarkers;
    colors: string[];
    grid: ApexGrid;
  };

  public pieChartOptions: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
    colors: string[];
  };

  public pieChartOptions2: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
    colors: string[];
  };

  public barChartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
  };

  constructor() {
    // Line chart options
    this.lineChartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 70, 50, 49, 80, 70, 91, 125],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      title: {
        text: 'Monthly Sales',
        align: 'left',
      },
      yaxis: {
        title: {
          text: 'Sales (in LKR)',
        },
      },
      markers: {
        size: 5,
        colors: ['#3685fb'],
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      colors: ['#3685fb'],
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
    };

    // Pie chart options
    this.pieChartOptions = {
      series: [35, 15, 20, 25, 20],
      chart: {
        type: 'donut',
        height: 350,
      },
      labels: ['Vehicle Owners', 'Corporate Companies', 'Vehicle Maintenance', 'Spare Part Suppliers', 'Police Stations'],
      title: {
        text: 'System Users',
        align: 'left',
      },
      colors: ['#195773','#3685fb', '#349aa8','#74a0c5','#f3f3f3'],

    };

    // Pie chart options
    this.pieChartOptions2 = {
      series: [244, 92, 33],
      chart: {
        type: 'pie',
        height: 350,
      },
      labels: ['Free', 'Gold', 'Platinum'],
      title: {
        text: 'Subscription Packages',
        align: 'left',
      },
      colors: ['#7B68EE', '#4169E1', '#00BFFF'],
    };

    // Bar chart options
    this.barChartOptions = {
      series: [
        {
          name: 'Inquiries',
          data: [2, 7, 12, 17, 9, 15, 4, 8, 12],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          // endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        title: {
          text: 'Inquiries 2024',
        },
      },
      title: {
        text: 'Monthly Inquiries',
        align: 'left',
      },
    };
  }
}
