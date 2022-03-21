import React from 'react'
import styles from "./Market.module.css"
import {Link} from 'react-router-dom';
import companies from "./companies.json"
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Heading from "../../components/Heading/Heading.js";


function Header(){
  return(
    <Heading text={"Market"}/>
  )
}

function Card(props){
  return(
    <a href={`/stock/${props.name}`}>
      <div className={`${styles.card}`}>
      <img src='images/logos/filler.jpg' alt=''/>
      <h3>{props.name}</h3>
      <p>{props.stockPrice}</p>
      </div>      
    </a> 
  )
}

function CardList(){

  var cardComps=companies.map((item,i)=>{
    return <Card name={item.name} stockPrice={item.stockPrice} key={item.id} id={item.id} />
  })

  return(
    cardComps
  )
}



function Market() {
  var nrows;
  if(window.innerWidth >= 1024){
    nrows=7;
  }else{
    nrows=2;
  }
  // console.log(localStorage.getItem('email'))

  return (
    <>
      <Header />
      <div className={`${styles.uppercontainer}`}>

        <div className={`${styles.item}`}>
          <NewsFeed nrows={nrows} />
        </div>
        <div className={`${styles.item}`}>
          <h1 className={`${styles.stocksheading}`}>Stocks</h1><br /> 
        <div className={`${styles.container}`}>
          <CardList />
        </div>
        </div>
      </div>
      
    </>

  )
}

export default Market