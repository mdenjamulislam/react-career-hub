
import { FaLocationDot, FaCircleDollarToSlot } from 'react-icons/fa6';
const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="rounded-lg border border-gray-300 p-4 md:p-6 lg:p-10">
            <img src={logo} alt={company_name} className="h-10 w-auto" />
            <h2 className="pt-5 text-lg font-bold text-secondary md:text-2xl">{job_title}</h2>
            <p className="text-base font-semibold text-dark-1 md:text-lg lg:text-xl">{company_name}</p>
            <div className="mt-5 flex gap-4">
                <button className="rounded-md border border-blue-600 px-4 py-3 text-base font-medium text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="rounded-md border border-blue-600 px-4 py-3 text-base font-medium text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="my-5 flex flex-col gap-5 md:flex-row">
                <div className="flex gap-2">
                    <FaLocationDot className="text-2xl text-dark-2" />
                    <span className="text-lg font-semibold text-dark-2 md:text-xl">{location}</span>
                </div>
                <div className="flex gap-2">
                    <FaCircleDollarToSlot className="text-2xl text-dark-2" />
                    <span className="text-lg font-semibold text-dark-2 md:text-xl">Sallery {salary}</span>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;