import React from 'react';
import Plot from 'react-plotly.js';

class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.name,
      stockChartXValues: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
      stockChartYValues: [56,34,75,45,25,34,43,97,19,52,24,61,39,70,73,60]
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.company}</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines',
              marker: {color: '#17BECF'},
            }
          ]}
          layout={{autosize: true}}
          useResizeHandler = {true}
          style={{widows: "100%", height: "100%"}}
          config = {{
            displayModeBar: false,
            responsive: true,
          }}
        />
      </div>
    )
  }
}

export default StockGraph;