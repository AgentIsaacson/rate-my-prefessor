import React, { Component } from 'react';

const MOCK_DATA = {
   icon: 'this is a hat',
   name: 'Professor Xavier',
   school: 'Gifted Youngsters',
   subject: 'Anger Managment',
   rating: '*****'

}

export default class Results extends Component {
   render() {
       return (

            <div className="results-wrapper">
                <div className="icon"> <img src="\assets\2000px-University_hat_icon1.png"/></div>
                <div className="professor-name">Professor Xavier</div>
                <div className="school-name">Gifted Youngsters</div>
                <div className="subject-name">Anger Managment</div>
                <div className="rating">*****</div>
            </div>
       );
   }
}
