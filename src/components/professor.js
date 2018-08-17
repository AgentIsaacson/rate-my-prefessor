import React, { Component } from 'react';

class Professor extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="professor">
                <div className=''>Professor: {this.props.professor.name}</div> 
                <div>School: {this.props.professor.school}</div>
            </div>
        );
    }
}
export default Professor;