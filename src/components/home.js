import React, { Component } from 'react';
import Professors from './professors';

let professors = [
  {
    id: 0,
    name: 'Mark',
    school: 'Lehi',
    class: 'flying',
    rating: '4',
    class: 'hangry management'
  },
  {
    id: 1,
    name: 'Bob',
    school: 'Home School',
    class: 'Socializing',
    rating: '3'
  },
  {
    id: 2,
    name: 'Sue',
    school: 'Brittan',
    class: 'self defense',
    rating: '5'
  },
  {
    id: 3,
    name: 'Professor Xavier',
    school: 'Gifted Youngsters',
    class: 'Anger Managment',
    rating: '4/5'
  },
  {
    id: 4,
    name: 'Professor Wold',
    school: 'Bottega',
    class: 'How to be a Super Hero',
    rating: '5/5'
  },
  {
    id: 5,
    name: 'Professor Green',
    school: 'Bottega',
    class: 'How to be a Super Villian',
    rating: '0/5'
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
