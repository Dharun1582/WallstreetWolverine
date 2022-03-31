import React from 'react';
import Plot from 'react-plotly.js';
// import graph from '../../data/graph.json';
import Heading2 from '../Heading/Heading2';
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


  // loadData = () => {
  //   if (this.state.index < graph.length) {
  //     this.setState(
  //       {
  //         stockChartYValues: graph[this.state.index][this.state.company],
  //         stockChartXLabels: graph[this.state.index].Time,
  //         // index: this.state.index + 1,
  //         // min: 0
  //       },
  //     );
  //   }
  // }

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
          const gData = res.gData;
          this.setState(
            {
              // index: res.i,
              stockChartXLabels: gData['Time'],
              stockChartYValues: gData[this.state.company],
              min: res.time
            },
          );
          // this.loadData();
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
        if (min >= 5) {
          this.fetchData().then(res => {
            min = this.state.min;
          });
        }
        // if (min >= 2){
        //   buttonState = false;
        // }

        if (this.state.index >= 61) {
          console.log("End");
          clearInterval(fetchId);
        }
      }, 10000);
    });

  }
  
  render() {
    // this.loadData();
// console.log("ASD"+graph);

    return (
      <div>
        {/* <button onClick={this.loadData}>Click</button> */}
        {/* <h1>{this.state.company}</h1> */}
        <Heading2 text={this.state.company} />
        <br/>
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
              paper_bgcolor: "#292e42",
              plot_bgcolor: "#292e42",
              xaxis: {
                title: "Time",
                titlefont: {
                  size: 13,
                },
                // rangeslider: {},
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
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
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