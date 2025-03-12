import React from "react";

const CoffeeForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/coffee-bg-dark.jpg')] bg-cover bg-center p-6">
      <div className="bg-base-100/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-2xl border border-coffee-700">
        {/* Coffee Logo with Animation */}
        <div className="flex justify-center mb-6 animate-bounce">
          <img
            src="https://cdn-icons-png.flaticon.com/512/924/924514.png"
            alt="Coffee Logo"
            className="w-20 h-20"
          />
        </div>

        <h1 className="text-4xl font-bold text-coffee-300 mb-6 text-center font-cursive animate-fade-in">
          Add a New Coffee
        </h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-4">
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  1. Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter coffee name"
                />
              </div>
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  2. Supplier
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter supplier name"
                />
              </div>
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  3. Category
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter category"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-4">
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  4. Chef
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter chef's name"
                />
              </div>
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  5. Taste
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter taste description"
                />
              </div>
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  6. Details
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
                  placeholder="Enter details"
                />
              </div>
            </div>
          </div>

          {/* Bottom Full Width Input */}
          <div>
            <label className="block text-coffee-200 text-sm font-medium mb-2">
              Photo
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-coffee-500/50"
            >
              <span className="mr-2">☕</span> Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoffeeForm;
