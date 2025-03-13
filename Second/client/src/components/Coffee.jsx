import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const {
    name,
    supplier,
    category,
    chef,
    taste,
    details,
    photo,
    _id: id,
  } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3001/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log("Delete");
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-[url('/coffee-bg-dark.jpg')] bg-cover bg-center p-6">
    //   <div className="bg-coffee-800/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-3xl border border-coffee-700">
    //     {/* Coffee Image */}
    //     <div className="flex justify-center mb-6">
    //       <img
    //         src={photo}
    //         alt={name}
    //         className="w-48 h-48 rounded-full object-cover border-4 border-coffee-500"
    //       />
    //     </div>

    //     {/* Coffee Name */}
    //     <h1 className="text-4xl font-bold text-coffee-200 text-center font-cursive mb-6">
    //       {name}
    //     </h1>

    //     {/* Coffee Details */}
    //     <div className="space-y-4 text-coffee-300">
    //       <div>
    //         <span className="font-semibold">Supplier:</span> {supplier}
    //       </div>
    //       <div>
    //         <span className="font-semibold">Category:</span> {category}
    //       </div>
    //       <div>
    //         <span className="font-semibold">Chef:</span> {chef}
    //       </div>
    //       <div>
    //         <span className="font-semibold">Taste:</span> {taste}
    //       </div>
    //       <div>
    //         <span className="font-semibold">Details:</span> {details}
    //       </div>
    //     </div>

    //     {/* Action Buttons */}
    //     <div className="mt-8 flex justify-center space-x-4">
    //       <button className="px-6 py-2 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all duration-300">
    //         Add to Cart
    //       </button>
    //       <button className="px-6 py-2 bg-coffee-400 text-coffee-900 font-semibold rounded-lg hover:bg-coffee-500 transition-all duration-300">
    //         Back to Menu
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-coffee-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-coffee-700 flex flex-col h-full">
      {/* Coffee Image */}
      <div className="flex justify-center mb-4">
        <img
          src={photo}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-coffee-500"
        />
      </div>

      {/* Coffee Details */}
      <div className="flex flex-col flex-grow space-y-3">
        <h2 className="text-2xl font-bold text-coffee-200 text-center font-cursive">
          {name}
        </h2>
        <div className="text-coffee-300 flex-grow">
          <p>
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-semibold">Details:</span> {details}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <Link to={"/details"}>
          <button className="px-4 py-2 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-all border duration-300">
            View Details
          </button>
        </Link>

        <Link to={`/updateCoffee/${id}`}>
          <button className="px-4 py-2 bg-coffee-400 text-coffee-900 font-semibold rounded-lg hover:bg-coffee-500 transition-all border duration-300">
            Edit
          </button>
        </Link>

        <button
          className="px-4 py-2 bg-coffee-400 text-coffee-900 font-semibold rounded-lg hover:bg-coffee-500 transition-all bo rder duration-300"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Coffee;
