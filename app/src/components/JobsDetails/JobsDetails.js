import React, { Component } from 'react';
import './JobsDetails.css';
import AUX from '../../hoc/Auxillary';

class JobsDetails extends Component {
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
                        <div key={job.id}>
                            <p className="job">{job.title}</p>
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
                <main className="jobs-box">
                    {this.state.jobs}
                </main>
            </AUX>
        )
    }
}

export default JobsDetails;