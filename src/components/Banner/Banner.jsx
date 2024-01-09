// import bannerImg from '.../assets/images/user.png';
const Banner = () => {
    return (
        <section className="flex gap-5">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-7xl">
                    One Step Closer To Your <span className="bg-linear inline-block bg-clip-text text-transparent">Dream Job</span>
                </h1>
                <p className="text-dark-1 text-base md:text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-linear text-white mt-2">Get Started</button>
            </div>
            <div>
                <img src='' alt="User" />
            </div>
        </section>
    );
};

export default Banner;
