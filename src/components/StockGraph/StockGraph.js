import React from 'react';
import Plot from 'react-plotly.js';
import graph from '../../data/graph.json';
import { apiFetchGraphData } from '../../auth/auth';

class StockGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: props.name,
      index: 0,
      stockChartXValues: [1, 2, 3, 4, 5, 6],
      stockChartXLabels: [1, 2, 3, 4, 5, 6],
      stockChartYValues: [],
      min: 0,
    }
  }


  loadData = () => {
    if (this.state.index < graph.length) {
      this.setState(
        {
          stockChartYValues: graph[this.state.index][this.state.company],
          stockChartXLabels: graph[this.state.index].Time,
          // index: this.state.index + 1,
          // min: 0
        },
      );
    }
  }

  fetchData = async () => {
    const response = await apiFetchGraphData();
    if (response === undefined) {
      console.log("Error");
    }
    else {
      if (response.status >=200 && response.status<=299) {
        const res = response.data;
        if (res) {
          // console.log(res);
          this.setState(
            {
              index: res.i,
              min: res.time
            },
          );
          this.loadData();
        }
      }
      else if (response.status >= 400 && response.status < 500) {
        //about to fill
      }
      else if (response.status >= 500 && response.status < 600) {
        console.log("Server Side Error");
      }
    }

  }

  componentDidMount() {
    this.fetchData().then(res => {
      var sec = 0;
      var min = this.state.min;
      const fetchId = setInterval(() => {
        sec += 10;
        // console.log(min, this.state.index);
        if (sec >= 60) {
          min += 1;
          sec = 0;
        }
        if (min >= 3) {
          this.fetchData().then(res => {
            min = this.state.min;
          });
        }
        // if (min >= 2){
        //   buttonState = false;
        // }

        if (this.state.index >= 13) {
          console.log("End");
          clearInterval(fetchId);
        }
      }, 10000);
    });

  }
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