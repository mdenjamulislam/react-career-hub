const Footer = () => {
    return (
        <footer className="bg-primary  py-5 md:py-8 lg:py-10 text-white">
            <div className="container footer">
                <aside>
                    <h2 className="text-3xl font-bold text-white">CareerHub</h2>
                    <p className="text-white">
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link-hover link">Branding</a>
                    <a className="link-hover link">Design</a>
                    <a className="link-hover link">Marketing</a>
                    <a className="link-hover link">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link-hover link">About us</a>
                    <a className="link-hover link">Contact</a>
                    <a className="link-hover link">Jobs</a>
                    <a className="link-hover link">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link-hover link">Terms of use</a>
                    <a className="link-hover link">Privacy policy</a>
                    <a className="link-hover link">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
