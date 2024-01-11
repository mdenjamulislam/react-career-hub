import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import AppliedJob from '../AppliedJob/AppliedJob';
import { getStoredJobApplications } from '../../utlity/localStorase';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter((job) => job.remote_or_onsite == 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    };

    useEffect(() => {
        const storedJobIds = getStoredJobApplications();

        console.log(storedJobIds);

        if (jobs.length > 0) {
            const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id.toString()));
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);

            console.log(jobApplied);
        }
    }, []);

    return (
        <section className='py-9 space-y-5'>
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-bold'>Applied Job {appliedJobs.length}</h2>
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
                        <li onClick={() => handleJobsFilter('all')}>
                            <a>All</a>
                        </li>
                        <li onClick={() => handleJobsFilter('remote')}>
                            <a>Remote</a>
                        </li>
                        <li onClick={() => handleJobsFilter('onsite')}>
                            <a>Onsite</a>
                        </li>
                    </ul>
                </details>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {displayJobs.map((job) => (
                    <AppliedJob key={job.id} job={job} />
                ))}
            </div>
        </section>
    );
};

export default AppliedJobs;
