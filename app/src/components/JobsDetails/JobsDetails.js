import React, { Component } from 'react';
import './JobsDetails.css';
import AUX from '../../hoc/Auxillary';
import { Link } from 'react-router-dom';

class JobsDetails extends Component {
    constructor() {
        super();
        this.state = {
            loadedJob: null
        }
    }

    componentDidMount() {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedJob || (this.state.loadedJob && this.state.loadedJob.id !== +this.props.match.params.id) ) {
                fetch('https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs/' + this.props.match.params.id)
                    .then( response => {
                        return response.json()})
                        .then(data =>{
                            console.log(data)
                            this.setState( { loadedJob: data } )}
                        )};
            }
        }

    render (){
        let job = <p></p>;
        if ( this.state.loadedJob ) {
            job = (
                <div>
                    <Link to="/">home</Link>
                    <h1>{this.state.loadedJob.title}</h1>
                    <p>{this.state.loadedJob.description}</p>
                    <p>{this.state.loadedJob.employment_type}</p>
                </div>
            );
        }
        return job
    }
}

export default JobsDetails;