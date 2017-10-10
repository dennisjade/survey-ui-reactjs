import React from 'react';
import { Doughnut } from 'react-chartjs';


class DoughnutChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          value: 50,
          color: '#F7464A',
          highlight: '#FF5A5E',
          label: 'Red',
        },
        {
          value: 50,
          color: '#00A840',
          highlight: '#00A840',
          label: 'Green',
        },
      ],
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Doughnut data={this.state.data} options={{ animationEasing: 'easeInSine', showTooltips: true }} height="200" width="350"/>
      </div>
    );
  }
}

export default DoughnutChart;
