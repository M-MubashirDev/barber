import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#523939]">404</h1>
        <p className="mt-4 text-xl text-black">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 border border-[#523939] text-[#523939] font-medium rounded hover:bg-[#523939] hover:text-white transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
