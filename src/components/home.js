import React, { Component } from 'react';
import Professors from './professors';

let professors = [
  {
    id: 0,
    name: 'Mark',
    school: 'work'
  },
  {
    id: 1,
    name: 'Bob',
    school: 'School'
  },
  {
    id: 2,
    name: 'Sue',
    school: 'Home'
  }
]

class Home extends Component {
render() {
    return (
      <div>
        <Professors professors={professors}/>
      </div>
    );
  }
}

export default Home;
