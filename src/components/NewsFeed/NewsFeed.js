import React from 'react'
import styles from "./NewsFeed.module.css"
import News from "./News.json"
import { apiFetchGraphData } from '../../auth/auth';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nIndex: 0,
      news_1:"",
      news_2:"",
      news_3:"",
      news_4:"",
      news_5:"",
      min: 0
    }
  }

  // loadData = () => {
  //   if (this.state.nIndex < News.length) {
  //     console.log(this.state.nIndex);
  //     this.setState( 
  //       {
  //         news_1: News[this.state.nIndex].news1,
  //         news_2: News[this.state.nIndex].news2,
  //         news_3: News[this.state.nIndex].news3,
  //         news_4: News[this.state.nIndex].news4,
  //         news_5: News[this.state.nIndex].news5
  //       }, () => {
  //         console.log(this.state);
  //       }
  //     );
  //     // this.forceUpdate();
  //     // console.log(News[this.state.nIndex].news1);
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
          this.setState(
            {
              nIndex: res.ni,
              min: res.time,
              news_1: res.news.news1,
              news_2: res.news.news2,
              news_3: res.news.news3,
              news_4: res.news.news4,
              news_5: res.news.news5,
            },
          );
          // this.loadData();
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
        if (min >= 3) {
          this.fetchData().then(res => {
            min = this.state.min;
          });
        }

        if ((this.state.nIndex) >= 153) {
          console.log("End");
          clearInterval(fetchId);
        }
      }, 10000);
    });
  }

  render(){
    var n1 = (this.state.news_1==='') ? 'none' : 'block';
    var n2 = (this.state.news_2==='') ? 'none' : 'block';
    var n3 = (this.state.news_3==='') ? 'none' : 'block';
    var n4 = (this.state.news_4==='') ? 'none' : 'block';
    var n5 = (this.state.news_5==='') ? 'none' : 'block';
    return (
      <div>
        <h1>News</h1>
        <div className={styles.newsfeed}>
          <div className={styles.newsfeedchild}><br /><br />
            <div style={{display:`${n1}`}}><h4>{this.state.news_1}</h4><br /><hr></hr></div><br />
            <div style={{display:`${n2}`}}><h4>{this.state.news_2}</h4><br /><hr></hr></div><br />
            <div style={{display:`${n3}`}}><h4>{this.state.news_3}</h4><br /><hr></hr></div><br />
            <div style={{display:`${n4}`}}><h4>{this.state.news_4}</h4><br /><hr></hr></div><br />
            <div style={{display:`${n5}`}}><h4>{this.state.news_5}</h4><br /><hr></hr></div><br />
            <div><b>----- X -----</b></div>
          </div>
        </div>
        <div className={styles.scrollDiv}>Scroll Down For More News!</div>
      </div>
    );
  }
}

export default NewsFeed