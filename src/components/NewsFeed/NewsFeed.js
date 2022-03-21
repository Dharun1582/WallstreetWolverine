import React from 'react'
import styles from "./NewsFeed.module.css"
import NewsTicker from "react-advanced-news-ticker"

function NewsFeed(props) {

  var news=['India is my Country','Curabitur porttitor ante eget hendrerit adipiscing',
  'Praesent ornare nisl lorem, ut condimentum lectus gravida ut.','Nunc ultrices tortor eu massa placerat posuere.'
  ,'xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Nunc ultrices tortor eu massa placerat posuere.'
]

  console.log(props.nrows)
  return (
    <div className={styles.newsfeed} >
      <h2>News</h2>
      <NewsTicker
        rowHeight={80}
        maxRows={props.nrows}
        speed={1000}
        duration={4000}
        autoStart={true}
        pauseOnHover={true}
        style={{ marginTop: 34 }}>
        <br />
        <div><h4>News1</h4>
        <br />
        {news[0]}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News2</h4>
        <br />
        {news[1]}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News3</h4>
        <br />
        {news[2]}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News4</h4>
        <br />
        {news[3]}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News5</h4>
        <br />
        {news[4]}
        <br />
        <br />
        </div><hr></hr>
        <br />
        <div><h4>News6</h4>
        <br />
        {news[5]}
        <br />
        <br />
        </div><hr></hr>
      </NewsTicker>
    </div>
  )
}

export default NewsFeed