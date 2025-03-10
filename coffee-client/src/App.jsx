import { useLoaderData } from "react-router-dom";
import Coffee from "./components/Coffee/Coffee";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-6xl">App</h1>

      <div className="grid md:grid-cols-2 gap-4 ">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
      <p className="text-6xl justify-between items-center w-full ">
        Beautification is not important 🙂
      </p>
    </div>
  );
}

export default App;
