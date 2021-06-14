import React, { Component } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './Form';

class FavDigimon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverLink: process.env.REACT_APP_SERVER,
      favData: this.props.favData,
      showFormVal: false,
      name: '',
      img: '',
      level: '',
      id: '',
    };
  }

  deleteFav = async (id) => {
    console.log(id);
    let deletedData = await axios.delete(
      `${this.state.serverLink}/deleteFav/${id}`
    );
    console.log(deletedData.data);
    this.setState({
      favData: deletedData.data,
    });
  };

  showForm = (idx) => {
    this.setState({
      showFormVal: true,
      name: this.state.favData[idx].name,
      img: this.state.favData[idx].img,
      level: this.state.favData[idx].level,
      id: this.state.favData[idx]._id,
    });
  };

  updateName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  updateImg = (event) => {
    this.setState({
      img: event.target.value,
    });
  };
  updateLevel = (event) => {
    this.setState({
      level: event.target.value,
    });
  };

  updateData = async (event) => {
    event.preventDefault();
    let itemToUpdate = {
      name: this.state.name,
      img: this.state.img,
      level: this.state.level,
    };
    let updatedData = await axios.put(
      `${this.state.serverLink}/updateData/${this.state.id}`,
      itemToUpdate
    );
    console.log(updatedData.data);
    this.setState({
      favData: updatedData.data,
      showFormVal: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.showFormVal && (
          <div style={{ margin: '7%' }}>
            <Form
              updateName={this.updateName}
              updateImg={this.updateImg}
              updateLevel={this.updateLevel}
              name={this.state.name}
              img={this.state.img}
              level={this.state.level}
              updateData={this.updateData}
            />
          </div>
        )}

        <div style={{ margin: '7%' }}>
          <CardGroup>
            {this.state.favData.map((item, idx) => {
              return (
                <div hey={idx}>
                  <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name} </Card.Title>
                      <Card.Text>{item.level}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => this.deleteFav(item._id)}
                      >
                        delete
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => this.showForm(idx)}
                      >
                        update
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default FavDigimon;
