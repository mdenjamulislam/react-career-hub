import { useLoaderData, useParams } from 'react-router-dom';
import { FaLocationDot, FaCircleDollarToSlot } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import saveJobApplication from '../../utlity/localStorase';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const jobInt = parseInt(id);
    const job = jobs.find((job) => job.id === jobInt);

    const { job_title, logo, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    const handleJobApplied = () => {
        saveJobApplication(id);
        toast("You are successfully applied!");
    }
    return (
        <section>
            <section className="py-6 md:py-10">
                <h2 className="text-center text-xl font-bold md:text-2xl lg:text-4xl">Job Details</h2>
            </section>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                <div className="col-span-full space-y-5 lg:col-span-3">
                    <p className="text-dark-1">
                        <strong className="font-bold text-primary">Job Description: </strong>
                        {job_description}
                    </p>
                    <p className="text-dark-1">
                        <strong className="font-bold text-primary">Job Responsibility: </strong>
                        {job_responsibility}
                    </p>
                    <div className="space-y-4">
                        <strong className="font-bold text-primary">Educational Requirements:</strong>
                        <p className="text-dark-1">{educational_requirements}</p>
                    </div>
                    <div className="space-y-4">
                        <strong className="text-dark-1">Expriences: </strong>
                        <p className="font-bold text-primary">{experiences}</p>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-1">
                    <div className="rounded-lg bg-slate-200 p-4 md:p-5 lg:p-8 space-y-5">
                        <h3 className="text-xl font-semibold">Job Details</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <FaCircleDollarToSlot className="text-xl text-dark-2" />
                                <p className=" text-dark-2">
                                    <strong className="text-primary">Sallery</strong> {salary}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCircleDollarToSlot className="text-xl text-dark-2" />
                                <p className=" text-dark-2">
                                    <strong className="text-primary">Job Title</strong> {job_title}
                                </p>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold">Contact Information</h3>

                        <button onClick={handleJobApplied} className='btn bg-linear text-white'>Apply Now</button>
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
