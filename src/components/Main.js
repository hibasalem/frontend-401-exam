import axios from 'axios';
import React, { Component } from 'react';
import Digimon from './Digimon';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverLink: process.env.REACT_APP_SERVER,
      allData: [],
      showData: false,
    };
  }

  componentDidMount = async () => {
    let allData = await axios.get(`${this.state.serverLink}/allData`);
    console.log(allData.data);
    this.setState({
      allData: allData.data,
      showData: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.showData && <Digimon allData={this.state.allData} />}
      </div>
    );
  }
}

export default Main;
