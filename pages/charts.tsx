// import Chart from 'react-apexcharts';
// import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import stylesApex from '../styles/Apex.module.css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const arrCategories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998];
function ChartApp(): JSX.Element {
  const stateObj = {
    options: {
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: arrCategories,
      },
      theme: { mode: 'dark' },
    },
    series: [
      {
        name: 'series-1',
        data: [300, 40, 35, 50, 49, 60, 70, 91, 125],
        color: '#FFD300',
      },
    ],
  };

  const optionsLine = {
    theme: { mode: 'dark' },
    chart: {
      // height: 328,
      type: 'line',
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    //colors: ["#3F51B5", '#2196F3'],
    series: [
      {
        name: 'Performance',
        data: [1, 15, 26, 20, 33, 27, 21, 22],
        color: '#39FF14',
      },
    ],
    title: {
      text: 'Performance metrics',
      align: 'left',
      offsetY: 25,
      offsetX: 20,
    },
    subtitle: {
      text: 'http://localhost:3000/dev',
      offsetY: 45,
      offsetX: 350,
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9,
      },
    },
    grid: {
      show: true,
      padding: {
        bottom: 0,
      },
    },
    labels: [
      // Dates
      '01/15/2002',
      '01/16/2002',
      '01/17/2002',
      '01/18/2002',
      '01/19/2002',
      '01/20/2002',
      '01/21/2002',
      '01/22/2002',
      '01/23/2002',
    ],
    xaxis: {
      tooltip: {
        enabled: false,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20,
    },
  };

  const radialBarOptions = {
    series: [75],
    chart: {
      background: 'gray',
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        // shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: '#C60404',
            opacity: 1,
          },
          {
            offset: 20,
            color: '#C60404',
            opacity: 1,
          },
          {
            offset: 60,
            color: '#35B535',
            opacity: 1,
          },
          {
            offset: 100,
            color: '#35B535',
            opacity: 1,
          },
        ],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Percent'],
    theme: { mode: 'dark' },
  };

  const [data, setData] = useState(stateObj);
  // const [renderChart, setChart] = useState({});

  // useEffect(() => {}), [data];
  console.log(data);
  return (
    <div className={`${stylesApex.container} ${stylesApex.body}`}>
      <div className={`${stylesApex.container} `}>
        {
          <Chart
            options={optionsLine}
            series={optionsLine.series}
            type='line'
            width={700}
            height={400}
          />
        }
      </div>
    </div>
  );
}

export default ChartApp;