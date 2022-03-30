import React from 'react'
import styles from "./Market.module.css"
import {Link} from 'react-router-dom';
import companies from "./companies.json"
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Heading from "../../components/Heading/Heading.js";
import Page_transition from "../../components/Animation/Transition";
const ImgSrc = `${process.env.PUBLIC_URL}/assets/images/Market/`;

function Header(){
  return(
    <Heading text={"MARKET"}/>
  )
}

function Card(props){
  return(
    <a href={`/stock/${props.name}`}>
      <div className={`${styles.card}`}>
      <img src={`${ImgSrc}${props.id}.png`} alt=''/>
      <h3>{props.name}</h3>

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
    // console.log(localStorage.getItem("email"));
    // console.log(localStorage.getItem("kid"));
    // console.log(localStorage.getItem("firstname"));
    // console.log(localStorage.getItem("lastname"));
    // console.log(localStorage.getItem("phone"));
    // console.log(localStorage.getItem("dept"));

  return (
    <Page_transition>
      <>
        <Header />
        <div className={`${styles.uppercontainer}`}>
          <div className={`${styles.itemN}`}>
            <NewsFeed />
          </div>
          <div className={`${styles.item}`}>
            <h1 className={`${styles.stocksheading}`}>Stocks</h1><br /> 
          <div className={`${styles.container}`}>
            <CardList />
          </div>
          </div>
        </div>
      </>
    </Page_transition>
  )
}

export default Market