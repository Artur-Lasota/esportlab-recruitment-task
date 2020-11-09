import React, { Component } from 'react';
import './JobsFetchData.css';
import AUX from '../../hoc/Auxillary';

class JobsFetchData extends Component {
    constructor() {
        super();
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        fetch('https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                let jobs = data.map((job) =>{
                    return(
                        <div key={job.id} className="job-box">
                            <p className="job-box__title">{job.title}</p>
                            <button className="job-box__button job-box__button--align-bottom">Apply</button>
                        </div>
                    )
                })
                this.setState({jobs: jobs});
                console.log("state", this.state.jobs);
            })
    }

    render (){
        return (
            <AUX>
                <h1>Job Offers</h1>
                <div className="jobs-box">
                    {this.state.jobs}
                </div>
            </AUX>
        )
    }
}

export default JobsFetchData;