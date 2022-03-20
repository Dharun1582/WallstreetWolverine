import React from 'react';
import Plot from 'react-plotly.js';
import graph from './graph.json'

class StockGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: props.name,
      index: 0,
      stockChartXValues: [1, 2, 3, 4, 5, 6],
      stockChartXLabels: [1, 2, 3, 4, 5, 6],
      stockChartYValues: [],
    }

  }


  loadData = () => {
    if (this.state.index < graph.length) {
      this.setState(
        {
          stockChartYValues: graph[this.state.index][this.state.company],
          stockChartXLabels: graph[this.state.index].Time,
          index: this.state.index + 1
        },
      );
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(res => {
        if (res && res.i) {
          console.log(res);
          console.log(res.i);
          this.setState(
            { index: res.i },
          );
          this.loadData();
        }
      });
  }
  // this.setState(
  //   {
  //     stockChartYValues: graph[this.state.index][this.state.company],
  //     stockChartXLabels: graph[this.state.index].Time,
  //     index: this.state.index + 1
  //   },
  // );
  // ["1.00-1.30", "1.30-2.00", "2.00-2.30", "2.30-3.00", "3.00-3.30", "3.30-4.00", "4.00-4.30", "4.30-5.00", "5.30-6.00", "6.30-7.00"]
  // [450, 350, 680, 770, 560, 450, 650, 430, 430, 340]

  // ["05.30-06.00","06.00-06.30","06.30-07.00","07.00-07.30","07.30-08.00","08.00-08.30","08.30-09.00","09.00-09.30","09.30-10.00","10.00-10.30",""]

  render() {
    // this.loadData();
    return (
      <div>
        {/* <button onClick={this.loadData}>Click</button> */}
        <h1>{this.state.company}</h1>
        <div>        
          <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: '#17BECF' },
            }
          ]}
          layout={{
            autosize: true,
            margin: {
              l: 65,
              r: 55,
              b: 70,
              t: 30,
              pad: 3,
            },
            paper_bgcolor: "#3f3f3f",
            plot_bgcolor: "#3f3f3f",
            xaxis: {
              title: "Time",
              titlefont: {
                size: 13,
              },
              type: '',
              // type: timeHours,
              // range: [this.state.stockChartXValues[0], this.state.stockChartXValues[5], ],
              color: "white",
              tickmode: "array",
              tickvals: [1, 2, 3, 4, 5, 6],
              ticktext: this.state.stockChartXLabels,
              tickfont: {
                size: 10,
              }
            },
            yaxis: {
              title: "Stock Price",
              titlefont: {
                size: 14,
              },
              color: "white",
              tickfont: {
                size: 10,
              }
            },
          }}
          // useResizeHandler={true}
          style={{ widows: "100%", height: "100%" }}
          config={{
            displayModeBar: false,
            responsive: true,
          }}
        />
        </div>

        <br />
        {/* <button>clickme</button> */}
        {/* <Modal name={this.state.company} /> */}
      </div >
    )
  }
}

export default StockGraph;