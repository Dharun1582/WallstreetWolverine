import React from 'react'
import styles from "./Market.module.css"
import {Link} from 'react-router-dom';
import companies from "./companies.json"
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Heading from "../../components/Heading/Heading.js";


function Header(){
  return(
    <Heading text={"MARKET"}/>
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
  console.log(window.innerWidth);
  if(window.innerWidth > 1024){
    nrows=7;
  }else{
    nrows=2;
  }

  return (
    <>
      <Header />
      <div className={`${styles.uppercontainer}`}>

        <div className={`${styles.item}`}>
          <NewsFeed nrows={nrows} />
        </div>
        <div>
          <h2 className={`${styles.stocksheading}`}>Stocks</h2><br /> 
        <div className={`${styles.container}`}>
          <CardList />
        </div>
        </div>
      </div>
      
    </>

  )
}

export default Market