import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
            <p className="text-gray-600 mt-2">
                The page you are looking for doesn&#39;t exist or has been moved.
            </p>
            <Link href="/">
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
