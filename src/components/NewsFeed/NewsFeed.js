import React from 'react'
import styles from "./NewsFeed.module.css"
// import NewsTicker from "react-advanced-news-ticker"
import News from "./News.json"
import { apiFetchGraphData } from '../../auth/auth';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nrows: props.nrows,
      nIndex: 0,
      news_1:"",
      news_2:"",
      news_3:"",
      news_4:"",
      news_5:"",
      min: 0
    }
  }

  loadData = () => {
    if (this.state.nIndex < News.length) {
      console.log(this.state.nIndex);
      this.setState( 
        {
          news_1: News[this.state.nIndex].news1,
          news_2: News[this.state.nIndex].news2,
          news_3: News[this.state.nIndex].news3,
          news_4: News[this.state.nIndex].news4,
          news_5: News[this.state.nIndex].news5
        },
      );
      console.log(News[this.state.nIndex].news1);
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
          this.setState(
            {
              nIndex: res.ni,
              min: res.time,
              
            },
          );
          this.loadData();
        }
      }
      else if (response.status >= 400 && response.status < 500) {
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
        if (min >= 2) {
          this.fetchData().then(res => {
            min = this.state.min;
          });
        }

        if ((this.state.nIndex) >= 25) {
          console.log("End");
          clearInterval(fetchId);
        }
      }, 10000);
    });
  }

  render(){
    console.log(this.state.news_1);
    return (
        <div className={styles.newsfeed}>
          <h1>News</h1>
        <div>
        <NewsTicker
          rowHeight = {60}
          maxRows = {this.state.nrows}
          speed = {600}
          duration = {4000}
          autoStart = {true}
          pauseOnHover = {true}
          style = {{marginTop: 34}}>
          <br />
          <div><h4>News1</h4>
          <br />
          <p>{this.state.news_1}</p>
          <br />
          <br />
          <hr></hr>
          </div>
          <br />
          <div><h4>News2</h4>
          <br />
          <p>{this.state.news_2}</p>
          <br />
          <br />
          <hr></hr>
          </div>
          <br />
          <div><h4>News3</h4>
          <br />
          <p>{this.state.news_3}</p>
          <br />
          <br />
          <hr></hr>
          </div>
          <br />
          <div><h4>News4</h4>
          <br />
          <p>{this.state.news_4}</p>
          <br />
          <br />
          <hr></hr>
          </div>
          <br />
          <div><h4>News5</h4>
          <br />
          <p>{this.state.news_5}</p>
          <br />
          <br />
          <hr></hr>
          </div>
          <br />
        </NewsTicker>
        </div> 
      </div>
    );
  }
}

export default NewsFeed