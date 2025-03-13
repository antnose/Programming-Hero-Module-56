import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { name, supplier, category, chef, taste, details, photo, _id } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    // console.log(name, supplier, category, chef, taste, details);
    const newCoffee = { name, supplier, category, chef, taste, details, photo };
    // console.log(newCoffee);

    fetch(`http://localhost:3001/coffee/${_id}`, {
      method: "Put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(e);
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success",
            text: "Update Coffee successfully",
            icon: "success",
            confirmButtonText: "Proceed",
          });
          form.reset(newCoffee);
        }
      });
  };
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
          Update Your Coffee!
        </h1>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="space-y-4">
              <div>
                <label className="block text-coffee-200 text-sm font-medium mb-2">
                  1. Name
                </label>
                <input
                  name="coffeeName"
                  defaultValue={name}
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
                  name="supplier"
                  defaultValue={supplier}
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
                  name="category"
                  defaultValue={category}
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
                  name="chef"
                  defaultValue={chef}
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
                  name="taste"
                  defaultValue={taste}
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
                  name="details"
                  defaultValue={details}
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
              name="photo"
              defaultValue={photo}
              type="text"
              className="w-full px-4 py-2 bg-coffee-900/50 border border-coffee-700 rounded-lg text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 placeholder-coffee-400 transition-all duration-300 hover:border-coffee-500"
              placeholder="Enter photo URL"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              // onClick={() => handleUpdateCoffee(_id)}
              className="px-8 py-3 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-coffee-500/50"
            >
              <span className="mr-2">☕</span> Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
