import { useLoaderData } from "react-router-dom";
import "./App.css";
import Coffee from "./components/Coffee";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <h1 className="text-6xl text-center m-15">Your Coffee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </>
  );
}

export default App;
