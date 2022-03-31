import React from "react";
import { apiGetHistory } from '../../auth/auth';
import Heading from "../../components/Heading/Heading.js";
import styles from "./History.module.css";

// function History(){
//     return (<>history</>)
// }

// export default History;

// var response={};

function Historyrecord(props){

    return(
        <>
        <tr>
            <td>{props.companyName}</td>
            <td>{props.nstocks}</td>
            <td>{props.flag}</td>
        </tr>
        </>
    )
}

function HistoryList(props){
    // console.log(props+"skj");
    var datalist=props.data.map((item,i)=>{
        return (<Historyrecord companyName={item.company} nstocks={item.number} flag={item.flag} />);
    })
    return {datalist};
    // return <>hii</>

}



class History extends React.Component{

    constructor(props){
        super(props);
        this.state={
            datalist:[],
        }
    }

    fetchHistory = async (config) => {
        const history = await apiGetHistory(config);
        if (history === undefined) {
          console.log("Error");
        }
        else {
          if (history.status >= 200 && history.status <= 299) {
            // console.log(profile.data);
            const res = history.data;
            if (res) {
              console.log(res);
              const list=res.map((item,i)=>{
                  return <Historyrecord companyName={item.company} nstocks={item.number} flag={item.flag} />
              });

              this.setState({datalist:list});

            }
          }
          else if (history.status >= 400 && history.status < 500) {
            //about to fill
          }
          else if (history.status >= 500 && history.status < 600) {
            console.log("Server Side Error");
          }
        }
      }



    componentDidMount() {
      if(localStorage.getItem('token')==null){
        window.location='/login';
        // showMessage('Login to continue','danger')
      }
        const config = {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        };
        this.fetchHistory(config);
      }


      render(){
        //   console.log(response+"askj")
          return (<>
                <Heading text="TRANSACTIONS" />
                {/* <HistoryList data={response} /> */}
                <table className={`${styles.transactionTable}`}>
                    <thead>
                    <tr>
                        <th>COMPANY</th>
                        <th>QUANTITY</th>
                        <th>FLAG</th>
                    </tr>
                    </thead>
                    {this.state.datalist}
                </table>
          </>)
      }
}

export default History;