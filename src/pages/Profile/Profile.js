import React from 'react';
import styles from "./Profile.module.css";
import Heading from "../../components/Heading/Heading.js";
import Page_transition from "../../components/Animation/Transition";
import details from "./Profile.json"
import stocks from "./stockdets.json"

function Details(props){
  return(
    <div className={`${styles.itemRow}`}>
      <p className={`${styles.itemHeader}`}>{props.itemHeader}</p>
      <p className={`${styles.itemContent}`}>{props.itemContent}</p>
    </div>
  )
}

function Profilebox(){
  var Profilebox=details.map((item,i)=>{
    return <Details itemHeader={item.itemHeader} itemContent={item.itemContent} />
  })
  return(
    Profilebox
  )
}

function Stockrows(){
  var Stockdets=stocks.map((item,i)=>{
    return (
      <tr>
        <td>{item.cname}</td>
        <td>{item.stocks}</td>
      </tr>
    )
  })
  return(
    Stockdets
  )
}

function Stocktable(){
  return(
    <table className={`${styles.stocktable}`}>
      <thead>
        <tr>
          <th>List of companies</th>
          <th>Number of stocks</th>
        </tr>
      </thead>
      <Stockrows/>
    </table>
  )
}

function Profile() {
  return (
    <Page_transition>
      <>
        <Heading text="PROFILE"/>
        <div className={`${styles.maincontainer}`}>
          <div className={`${styles.profilecontainer}`}>
            <Profilebox/>
          </div>
          <Stocktable/>
        </div>
      </>
    </Page_transition>
  )
}
/*class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      kid: '',
      email: '',
      college: '',
      department:'',
      cokacula: 0,
      hettan: 0,
      vedophene: 0,
      abibas: 0,
      lycalabs: 0,
      yechier: 0,
      wallet: 0,
    }
  }



  fetchProfile = async (config) => {
    const profile = await apigetProfile(config);
    if (profile === undefined) {
      console.log("Error");
    }
    else {
      if (profile.status >= 200 && profile.status <= 299) {
        console.log(profile.data);
        const res = profile.data;
        if (res) {
          const userData = res.userTable;
          const stockData = res.stockTable;
          console.log(userData)
          console.log(stockData)
          this.setState({
            name: userData.firstname + userData.lastname,
            kid: userData.kid,
            email: userData.email,
            college: userData.college,
            cokacula: stockData.CokaCula,
            hettan: stockData.HettanPetroleum,
            vedophene: stockData.Vedophene,
            abibas: stockData.Abibas,
            lycalabs: stockData.LycaLabs,
            yechier: stockData.Yechier,
            wallet: stockData.Wallet,
          });
        }
      }
      else if (profile.status >= 400 && profile.status < 500) {
        //about to fill
      }
      else if (profile.status >= 500 && profile.status < 600) {
        console.log("Server Side Error");
      }
    }
  }


  componentDidMount() {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    this.fetchProfile(config);
  }


  render() {
    return (
      <h1>Profile</h1>
    )
  }
}*/

export default Profile