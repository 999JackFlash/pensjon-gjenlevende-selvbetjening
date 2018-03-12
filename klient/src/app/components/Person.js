import React, { Component } from 'react';
import axios from 'axios';

class Person extends Component {

constructor(props) {
    super(props);

    this.state = {
      person: null
    };

  }

  componentWillMount(){
    axios.get("/api/public/person/123").then(res=>this.setState(state=>({person:res.data})));
  }

  render(){
    return !this.state.person?null :<span>{this.state.person.navn}:{this.state.person.alder}</span>;
  }

}

export default Person;