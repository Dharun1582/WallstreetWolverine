import React from 'react';
import styles from "./Profile.module.css";
import Heading from "../../components/Heading/Heading.js";
import { apigetProfile } from '../../auth/auth';

function Profilebox(props){
  return(
    <>
      <div className={`${styles.itemRow}`}>
        <p className={`${styles.itemHeader}`}>K! ID</p>
        <p className={`${styles.itemContent}`}>{props.kid}</p>
      </div>
      <div className={`${styles.itemRow}`}>
        <p className={`${styles.itemHeader}`}>Name</p>
        <p className={`${styles.itemContent}`}>{props.name}</p>
      </div>
      <div className={`${styles.itemRow}`}>
        <p className={`${styles.itemHeader}`}>College</p>
        <p className={`${styles.itemContent}`}>{props.college}</p>
      </div>
      <div className={`${styles.itemRow}`}>
        <p className={`${styles.itemHeader}`}>Department</p>
        <p className={`${styles.itemContent}`}>{props.department}</p>
      </div>
      <div className={`${styles.itemRow}`}>
        <p className={`${styles.itemHeader}`}>Email</p>
        <p className={`${styles.itemContent}`}>{props.email}</p>
      </div>
    </>
  )
}

function Stocktable(props){
  return(
    <table className={`${styles.stocktable}`}>
      <thead>
        <tr>
          <th>List of companies</th>
          <th>Number of stocks</th>
        </tr>
      </thead>
        <tr>
          <td>CokaCula</td>
          <td>{props.cokacula}</td>
        </tr>
        <tr>
          <td>Hettan</td>
          <td>{props.hettan}</td>
        </tr>
        <tr>
          <td>Vedophene</td>
          <td>{props.vedophene}</td>
        </tr>
        <tr>
          <td>Abibas</td>
          <td>{props.abibas}</td>
        </tr>
        <tr>
          <td>LycaLabs</td>
          <td>{props.lycalabs}</td>
        </tr>
        <tr>
          <td>Yechier</td>
          <td>{props.yechier}</td>
        </tr>
        <tr>
          <td>Wallet</td>
          <td>{props.wallet}</td>
        </tr>
    </table>
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

class Profile extends React.Component {
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
      <>
        <Heading text="PROFILE"/>
        <div className={`${styles.maincontainer}`}>
          <div className={`${styles.profilecontainer}`}>
            <Profilebox name={this.state.name} kid={this.state.kid} email={this.state.email} college={this.state.college} department={this.state.department}/>
          </div>
          <Stocktable cokacula={this.state.cokacula}
                      hettan={this.state.hettan}
                      vedophene={this.state.vedophene}
                      abibas={this.state.abibas}
                      lycalabs={this.state.lycalabs}
                      yechier={this.state.yechier}
                      wallet={this.state.wallet}
          />
        </div>
      </>
    )
  }
}

export default Profile