import React, { Component } from 'react';

class ProfessorImg extends Component {

    render() {
        return (
            <div id="wrapper">
                <div className="header-img">
                    <div className="columns">
                        <h2>PROF MAD LIB</h2>
                        <div className="pin">
                            <img className='front' src="https://www.ragnbonemanmusic.com/wp-content/themes/ragnboneman/assets/img/ragsold.jpg" alt="professor"
                            />
                        </div>
                    </div>
                </div>
                <div className="attributes">
                    <li>Department: Art & Culture</li>
                    <li>School: TECHNOLOGY</li>
                    <li>Height: 6ft5</li>
                    <li>Favorite Book: The Gods Must Be Crazy</li>
                    <li>Office: CB 311 - E</li>
                    <li>Email: madlib@bottega.edu</li>
                    <li>Mail Code: 133</li>
                    <li>Phone: (801)-777-7777</li>
                    <li>Height: 6ft5</li>

                </div>
            </div>
        );
    }
}

export default ProfessorImg;


// constructor(props) {
//     super(props);

//     this.state = {
//         department: "",
//         school: "",
//     }

//     this.updateName = this.updateName.bind(this);
// }

// updateName() {
//     this.setState({ department: "CS" })
// }

// <button onClick={this.updateName} >Click me</button>
// {this.state.department}