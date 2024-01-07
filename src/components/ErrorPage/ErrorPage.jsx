import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
            <h1 className="text-5xl font-bold">404</h1>
            <h2 className="text-3xl font-bold">Not Found!</h2>
            <Link to="/">Back To Home</Link>
        </div>
    );
};

export default ErrorPage;
