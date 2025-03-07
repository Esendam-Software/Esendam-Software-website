import React from 'react';
import Image from 'next/image'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-blue-900 rounded-lg blur-sm opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative mx-2 px-7 py-6 bg-white ring-1 ring-gray-300 rounded-lg shadow-lg">
            <Image
              src="/ES-logo.svg"
              className="w-32 h-32 mx-auto"
              width={150}
              height={150}
              alt="Esendam Software Logo"
            />
            <div className="text-center mt-6">
              <p className="text-gray-700 text-lg">
                Creating Software Solutions Tailored to You!
              </p>
              <h1 className="text-xl font-semibold text-blue-600 mt-8">
                <a
                  href="mailto:bram.esendam@esendamsoftware.com"
                  className="hover:underline"
                >
                  Contact us
                </a>
              </h1>
              <p className="text-gray-700 mt-2">
                Email: <a className="hover:underline hover:text-blue-600" href="mailto:bram.esendam@esendamsoftware.com">bram.esendam@esendamsoftware.com</a>
              </p>
              <p className="text-gray-700 mt-2">
                LinkedIn: <a className="hover:underline hover:text-blue-600" href="https://www.linkedin.com/company/71559000" target="_blank" rel="noopener noreferrer">Esendam Software</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
