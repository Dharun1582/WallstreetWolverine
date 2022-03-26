import React from 'react';
import styles from "./Profile.module.css";
import Heading from "../../components/Heading/Heading.js";
import { apigetProfile } from '../../auth/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      kid: '',
      email: '',
      college: '',
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
}

export default Profile