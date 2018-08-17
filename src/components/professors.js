import React, { Component } from 'react';
import Professor from './professor';

class Professors extends Component {
    constructor(props){
        super(props);
        this.state = {
          search: ""
        }
      }
    
      updateSearch(event){
        this.setState({search: event.target.value})
      }
    
      render() {
        let filteredProfessors = this.props.professors.filter((professor) => {
          return professor.name.toLowerCase().indexOf(this.state.search) !== -1;
        });
    
        return (
          <div>
          <h1>Search Your Professor</h1>
            <ul>
            <input type='text' 
              placeholder="Search a professor:"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
              {filteredProfessors.map((professor) => {
                return <Professor professor={professor} key={professor.id}/>
              })}
            </ul>
          </div>
        );
      }
    }
    
export default Professors;