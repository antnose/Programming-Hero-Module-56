import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffee = { name, supplier, category, chef, taste, details, photo };

    // fetch("http://localhost:3001/coffee", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(coffee),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Coffee Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Done",
    //       });
    //       form.reset();
    //     }
    //   });
    // console.log(name, supplier, category, chef, taste, details, photo);

    fetch("http://localhost:3001/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/.json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex justify-center text-bl items-center min-h-screen bg-gray-100 py-6">
      <form
        onSubmit={handleAddCoffee}
        className="w-full max-w-4xl bg-white text-black p-8 rounded-lg shadow-xl border border-gray-300"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Add Coffee
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter coffee name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Supplier
            </label>
            <input
              name="supplier"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter supplier name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              name="category"
              type="text"
              className="w-full p-3 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chef
            </label>
            <input
              name="chef"
              type="text"
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter chef name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taste
            </label>
            <input
              name="taste"
              type="text"
              className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter taste description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Details
            </label>
            <input
              name="details"
              type="text"
              className="w-full p-3 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter more details"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Photo URL
          </label>
          <input
            name="photo"
            type="text"
            className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter photo URL"
          />
        </div>

        <div className="flex justify-center">
          <button
            value="Add Coffee"
            type="submit"
            className="w-full bg-amber-800 text-black text-white py-3 rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500 cursor-pointer"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
