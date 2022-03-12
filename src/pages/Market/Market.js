import React from 'react'
import styles from "./Market.module.css"
import {Link} from 'react-router-dom';
import companies from "./companies.json"



function Header(){
  return(
    <h1 className={`${styles.head}`}>Market</h1>
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
  return (
    <>
      <Header />
      <div className={`${styles.container}`}>
        <CardList />
      </div>
    </>

  )
}

export default Market