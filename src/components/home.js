import React, { Component } from 'react';
import Professors from './professors';

let professors = [
  {
    id: 0,
    name: 'Mark',
    school: 'Lehi',
    rating: 4
  },
  {
    id: 1,
    name: 'Bob',
    school: 'Home School',
    rating: 3
  },
  {
    id: 2,
    name: 'Sue',
    school: 'Brittan',
    rating: 5
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
