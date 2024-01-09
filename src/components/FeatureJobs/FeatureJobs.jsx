import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loadJobData, setLoadJobData] = useState(2);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    return (
        <section className="py-6 md:py-10 lg:py-16 ">
            <div className="space-y-2 text-center">
                <h2 className="text-center text-2xl font-bold text-primary md:text-3xl lg:text-5xl">Featured Jobs</h2>
                <p className="text-dark-1 text-sm md:text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-8">
                {jobs.slice(0, loadJobData).map((job) => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            <div className={loadJobData.length === jobs.length ? 'hidden' : `mt-5 text-center`}>
                <button onClick={() => {setLoadJobData(jobs.length)}} className="btn btn-primary">Load More</button>
            </div>
        </section>
    );
};

export default FeatureJobs;
