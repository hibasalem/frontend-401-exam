import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Digimon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverLink: process.env.REACT_APP_SERVER,
      allData: [],
    };
  }

  addToFav = async (idx) => {
    let favItem = this.props.allData[idx];
    console.log(favItem);
    await axios.post(`${this.state.serverLink}/addToFav`, favItem);
  };

  render() {
    return (
      <div>
        <CardGroup>
          {this.props.allData.map((item, idx) => {
            return (
              <div hey={idx}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>{item.level}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.addToFav(idx)}
                    >
                      Add to faviourte
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

export default Digimon;
