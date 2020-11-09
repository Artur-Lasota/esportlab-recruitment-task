import React, { Component } from 'react';
import './JobsFetchData.css';
import AUX from '../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import JobsDetails from '../JobsDetails/JobsDetails';

class JobsFetchData extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        fetch('https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs')
            .then(response => {
                return response.json();
            }).then(data => {
                let jobs = data.map((job) =>{
                    return(
                        <Link to ={'/details/'+ job.id} key={job.id} className="job-box">
                            <p className="job-box__title">{job.title}</p>
                            <button className="job-box__button job-box__button--align-bottom">Apply now</button>
                        </Link>
                    )
                })
                this.setState({jobs: jobs});
                console.log("state", this.state.jobs);
            })
    }

    render (){
        return (
            <AUX>
                <div className="jobs-box">
                    {this.state.jobs}
                </div>
            </AUX>
        )
    }
}

export default JobsFetchData;