const Coffee = ({ coffee }) => {
  const { name, supplier, category, chef, taste, details, photo } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {name} </h2>
          <p>{details}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View</button>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
