import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AddProfessor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            professorName: "",
            school: "",
            subject: "",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        alert(' Professor Name:' + this.state.professorName + ' School: ' + this.state.school + ' Subject:' +  this.state.subject + ' was submitted');;
    }
    render() {
        return (


            <div className="Form">
            <div className="title">Submit your Professor</div>
                <div className="container">

                    <form className="form" onSubmit={this.handleSubmit}>
                        <label className="professorName">Professor Name</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="input"
                                type="text"
                                name="professorName"
                                value={this.state.fullname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label className="school">School</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="input"
                                type="text"
                                name="school"
                                value={this.state.school}
                                onChange={this.handleChange}
                            />
                        </div>
                        <label className="subject">Subject</label>
                        <div className="control">
                            <input
                                className="input"
                                placeholder="input"
                                type="subject"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                            />


                        </div>
                        <div className="portfolioButton">
                        <button id ="submit"> Submit</button>
                        
                        </div>

                    </form>
                </div>


            </div>
        );
    }
}
export default AddProfessor;
