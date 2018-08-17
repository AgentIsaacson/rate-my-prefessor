import React, { Component } from 'react';

class ProfessorImg extends Component {
    render() {
        return (
            <div id="wrapper">
                <h2>Professor Blake Shelton</h2>
                <div id="columns">
                    <div className="pin">
                        <img className='front' src="https://www.ragnbonemanmusic.com/wp-content/themes/ragnboneman/assets/img/ragsold.jpg" alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfessorImg;