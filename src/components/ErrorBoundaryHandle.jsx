/* eslint-disable react/prop-types */
function ErrorBoundaryHandle({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-fit w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-brown-primary font-bold text-3xl flex items-center justify-center md:text-4xl lg:text-5xl text-center font-montserrat">
            Something Went Wrong!
          </h1>

          <p className="mt-4 text-gray-700 text-center">
            {error.message ||
              "An unexpected error has occurred. Please try again."}
          </p>

          <button
            onClick={() => resetErrorBoundary()}
            className="mt-6 w-full bg-brown-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-black transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundaryHandle;
