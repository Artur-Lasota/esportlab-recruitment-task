import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

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
                        <Link to ={'/details/'+ job.id} key={job.id} className="job-item">
                            <p className="job-item__title">{job.title}</p>
                            <button className="job-item__button job-item__button--align-bottom">Apply now</button>
                        </Link>
                    )
                })
                this.setState({jobs: jobs});
            })
    }

    render (){
        return (
                <div className="jobs-list">
                    {this.state.jobs}
                </div>
        )
    }
}

export default JobsFetchData;