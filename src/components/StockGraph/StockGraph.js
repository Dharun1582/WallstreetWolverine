import { tickFormat } from 'd3';
import React from 'react';
import Plot from 'react-plotly.js';
// import { d3 } from 'plotly.js';
import graph from './graph.json'

class StockGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      company: props.name,
      stockChartXValues: [1,2,3,4,5,6,7,8,9,10] ,
      stockChartYValues: graph[0][props.name],
    }
    
  }

  // ["1.00-1.30", "1.30-2.00", "2.00-2.30", "2.30-3.00", "3.00-3.30", "3.30-4.00", "4.00-4.30", "4.30-5.00", "5.30-6.00", "6.30-7.00"]
  // [450, 350, 680, 770, 560, 450, 650, 430, 430, 340]
  loadData = () => {
    var x = this.stockChartXValues, y = this.stockChartYValues;
    x.push(graph[0].Time);
    y.push(graph[0].Abibas);
    this.setState(
      {
        stockChartXValues: x,
        stockChartYValues: y,
      }
    );
  }

  lDt = () => {
    this.setState = {
      stockChartYValues: graph[0].this.company,
    }
  }
  // drawData = () => {
  //   d3.csv("./graph.csv", (allRows) => {
  //     console.log(allRows);
  //     var x = [], y = [];
  //     for (var i = 0; i < allRows.length; i++) {
  //       var row = allRows[i];
  //       x.push(row['Time']);
  //       y.push(row['Abibas']);
  //     }
  //     this.setState(
  //       {
  //         stockChartXValues: x,
  //         stockChartYValues: y,
  //       }
  //     );
  //   });

  // }

//   load = () => {
//     fetch(  )
//         .then( response => response.json() )
//         .then( responseText => {
//             console.log(responseText);
//         })
// };

// ["05.30-06.00","06.00-06.30","06.30-07.00","07.00-07.30","07.30-08.00","08.00-08.30","08.30-09.00","09.00-09.30","09.30-10.00","10.00-10.30",""]

  render() {
    // this.loadData();
    // console.log(graph);
    return (
      <div>
        {/* <button onClick={this.lDt}>Click</button> */}
        <h1>{this.state.company}</h1>
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
              color: "white",
              tickmode: "array",
              tickvals: [1,2,3,4,5,6,7,8,9,10],
              ticktext: graph[0].Time,
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
          useResizeHandler={true}
          style={{ widows: "100%", height: "100%" }}
          config={{
            displayModeBar: false,
            responsive: true,
          }}
        />
      </div >
    )
  }
}

export default StockGraph;