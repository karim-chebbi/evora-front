import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen flex items-center">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center text-center">
        <h1 className="text-9xl font-extrabold text-indigo-500">404</h1>

        <h2 className="text-3xl sm:text-4xl font-medium title-font text-gray-900 mt-6">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 text-lg max-w-md leading-relaxed">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Let's get you back to the right place.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Back to Home
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
