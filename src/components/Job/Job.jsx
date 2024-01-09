import { FaLocationDot, FaCircleDollarToSlot } from 'react-icons/fa6';
const Job = ({ job }) => {
    const { job_title, logo, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="rounded-lg border border-gray-300 p-4 md:p-6 lg:p-10">
            <img src={logo} alt={company_name} className="h-10 w-auto" />
            <h2 className="pt-5 text-lg font-bold text-secondary md:text-2xl">{job_title}</h2>
            <p className="text-dark-1 text-base font-semibold md:text-lg lg:text-xl">{company_name}</p>
            <div className="mt-5 flex gap-4">
                <button className="rounded-md border border-blue-600 px-4 py-3 text-base font-medium text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="rounded-md border border-blue-600 px-4 py-3 text-base font-medium text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex flex-col gap-5 md:flex-row my-5">
                <div className="flex gap-2">
                    <FaLocationDot className="text-dark-2 text-2xl" />
                    <span className="text-dark-2 text-lg font-semibold md:text-xl">{location}</span>
                </div>
                <div className="flex gap-2">
                    <FaCircleDollarToSlot className="text-dark-2 text-2xl" />
                    <span className="text-dark-2 text-lg font-semibold md:text-xl">Sallery {salary}</span>
                </div>
            </div>

            <button className="bg-linear btn text-white">View Details</button>
        </div>
    );
};

export default Job;
