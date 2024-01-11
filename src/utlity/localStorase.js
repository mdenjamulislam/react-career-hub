
export const getStoredJobApplications = () => {
    const storedJobApplication = localStorage.getItem('jobApplications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }

    return [];
}



const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplications();
    const isJobApplicationExist = storedJobApplications.find(jobId => jobId === id);

    if (!isJobApplicationExist) {
        storedJobApplications.push(id);
        localStorage.setItem('jobApplications', JSON.stringify(storedJobApplications));

    }
}

export default { saveJobApplication, getStoredJobApplications };