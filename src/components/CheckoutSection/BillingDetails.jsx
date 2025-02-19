import React from 'react';

const BillingDetails = () => {
  return (
    <div className="w-full h-screen md:w-1/2 p-4">
      <h1 className="text-3xl font-bold mb-4">Billing Details</h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name *</label>
            <input type="text" id="firstName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name *</label>
            <input type="text" id="lastName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company name (optional)</label>
          <input type="text" id="companyName" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mt-4">
          <label htmlFor="countryRegion" className="block text-sm font-medium text-gray-700">Country / Region *</label>
          <select id="countryRegion" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>United States (US)</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street address *</label>
          <input type="text" id="streetAddress" placeholder="House number and street name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mt-4">
          <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mt-4">
          <label htmlFor="townCity" className="block text-sm font-medium text-gray-700">Town / City *</label>
          <input type="text" id="townCity" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
        <div className="mt-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State *</label>
          <select id="state" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>California</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code *</label>
          <input type="text" id="zipCode" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;