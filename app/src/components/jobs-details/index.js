import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class JobsDetails extends Component {
    constructor() {
        super();
        this.state = {
            loadedJob: null
        }
    }

    componentDidMount() {
        if ( this.props.match.params.id && ( !this.state.loadedJob || (this.state.loadedJob && this.state.loadedJob.id !== +this.props.match.params.id) )) {
            fetch('https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs/' + this.props.match.params.id)
                .then( response => {
                    return response.json()})
                .then(data =>{
                    this.setState( { loadedJob: data } )}
                )};
        }

    render (){
        let job = <p></p>;
        if ( this.state.loadedJob ) {
            job = (
                <article className="JobsDetails">
                    <Link to="/">All positions</Link>
                    <h2 className="JobsDetails__title">{this.state.loadedJob.title}</h2>
                    <p className="JobsDetails__employment-type">{this.state.loadedJob.employment_type}</p>
                    <p className="JobsDetails__description">{this.state.loadedJob.description}</p>
                </article>
            );
        }
        return job
    }
}

export default JobsDetails;