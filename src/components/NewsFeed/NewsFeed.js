import React from 'react'
import styles from "./NewsFeed.module.css"
import NewsTicker from "react-advanced-news-ticker"
import News from "./News.json"

function NewsFeed(props) {
  return (
    <div className={styles.newsfeed} >
      <h1>News</h1>
      <div>
      <NewsTicker
        rowHeight = {60}
        maxRows = {props.nrows}
        speed = {600}
        duration = {4000}
        autoStart = {true}
        pauseOnHover = {true}
    style = {{marginTop: 34}}>
        <br />
        <div><h4>News1</h4>
        <br />
        {News.News1}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News2</h4>
        <br />
        {News.News2}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News3</h4>
        <br />
        {News.News3}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News4</h4>
        <br />
        {News.News4}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News5</h4>
        <br />
        {News.News5}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News6</h4>
        <br />
        {News.News6}
        <br />
        <br />
        </div><hr></hr>
      </NewsTicker>
      </div>
    </div>
  )
}

export default NewsFeed