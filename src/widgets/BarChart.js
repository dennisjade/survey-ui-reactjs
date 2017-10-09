import React, { Component } from 'react';
import {Bar} from 'react-chartjs';

class BarChart extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Bar Chart First dataset',
            fillColor: '#E8575A',
            strokeColor: '#E8575A',
            highlightFill: 'rgba(220,220,220,0.75)',
            highlightStroke: 'rgba(220,220,220,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            fillColor: '#0094D6',
            strokeColor: '#0094D6',
            highlightFill: 'rgba(151,187,205,0.75)',
            highlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      },
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Bar data={this.state.data}  options={{responsive: true, animationSteps: 300 }} height="210" width="800"/>
      </div>
    );
  }
}

export default BarChart;
