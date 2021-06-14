import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div style={{ border: 'solid' }}>
        {console.log(this.props.name)}
        <form
          style={{ margin: '10px' }}
          onSubmit={(event) => this.props.updateData(event)}
        >
          <fieldset>
            <legend>Update Form</legend>

            <label for="fname">name </label>
            <input
              type="text"
              value={this.props.name}
              onChange={(event) => this.props.updateName(event)}
            />

            <label for="lname">image</label>
            <input
              type="text"
              value={this.props.img}
              onChange={(event) => this.props.updateImg(event)}
            />

            <label for="lname">level</label>
            <input
              type="text"
              value={this.props.level}
              onChange={(event) => this.props.updateLevel(event)}
            />

            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
