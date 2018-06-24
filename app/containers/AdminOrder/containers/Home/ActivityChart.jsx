import React from 'react';
import styled from 'styled-components';
import C3Chart from 'react-c3js';
import moment from 'moment';
import _times from 'lodash/times';
import 'c3/c3.css';

const days = _times(8, i => moment().day(i - 8).format('D MMM'));
const data = {
  columns: [
    ['data1', 30, 200, 320, 400, 150, 250, 666, 200],
    ['data2', 787, 385, 120, 200, 215, 25, 78, 218],
    ['data3', 215, 20, 223, 64, 15, 525, 497, 620]
  ]
};

const ActivityChart = () => (
  <div>
    <div>Activtiy</div>
    <StyledChart
      data={data}
      grid={{
        y: {
          show: true
        }
      }}
      legend={{
        hide: true
      }}
      axis={{
        x: {
          type: 'category',
          categories: days,
          tick: {
            count: 8
          }
        },
        y: {
          padding: {
            top: 10,
            bottom: 10
          },
          tick: {
            values: _times(5, i => i * 200)
          }
        }
      }}
      color={{
        pattern: [
          '#7ED321',
          '#D0021B',
          '#4A90E2'
        ]
      }}
      tooltip={{
        grouped: false,
        contents: (data, title, value, color) => {
          const dColor = color(data[0].id);
          return `<span style="background:${dColor}">${data[0].value}</span>`;
        }
      }}
    />
  </div>
);

export default ActivityChart;

const StyledChart = styled(C3Chart)`
  width: 100%;
  > svg {
    width: 100%;
  }
  .c3-ygrid {
    stroke-dasharray: 0;
    stroke: #EBEBEB;
  }
  .c3-axis path, .c3-axis line {
    stroke: transparent;
  }
  .c3-xgrid-focus {
    stroke: transparent;
  }
  .c3-shape {
    fill: transparent;
  }
  text {
    font-size: 16px;
    fill: #9B9B9B;
  }
`;
