import React from 'react';
import Plot from 'react-plotly.js';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      stockChartYValues: [56,34,75,45,25,34,43,97,19,52,24,61,39,70,73,60]
    }
  }


  render() {
    return (
      <div>
        <h1>props.company</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
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

export default Graph;