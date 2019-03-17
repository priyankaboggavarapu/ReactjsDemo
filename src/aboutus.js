import React, { Component } from 'react';
// import Home, { Component } from './Home'
import {browserHistory} from 'react-router';
// import Home from './Home'
class Aboutus extends Component {

  // constructor(props){
  //   super(props);
   
  // }
  onNavigateservices(){
    browserHistory.push("/services")
  }
  render() {
    // const {homedata}=this.props;
    return (
      <div>
        {/* <table>
          <th>homedata={homedata}</th>
        </table>
     */}
    {/* <Home /> */}
        <h1>name is coming from home page {this.props.fname}</h1>
      <input type="button" value="navigate" onClick={this.onNavigateservices}></input>
      </div>
    );
  }
}

export default Aboutus;