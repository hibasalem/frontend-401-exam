import axios from 'axios';
import React, { Component } from 'react';
import FavDigimon from './FavDigimon';

class FavoriteDigimons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverLink: process.env.REACT_APP_SERVER,
      favData: [],
      showFavData: false,
    };
  }

  componentDidMount = async () => {
    let favData = await axios.get(`${this.state.serverLink}/favData`);
    console.log(favData.data);
    this.setState({
      favData: favData.data,
      showFavData: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.showFavData && <FavDigimon favData={this.state.favData} />}
      </div>
    );
  }
}

export default FavoriteDigimons;
