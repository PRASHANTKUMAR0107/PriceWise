import Navbar from "./one/Navbar";
import PaginationComponent from "./one/Pagination";
import ProductPage from "./product/[id]/page";
import Home from "./two/Home";

const App = () => {
  return (
    <div className="bg-[rgb(0,0,0)]">
      <Home />
      <br />
      <br />
      <div className="text-white flex justify-center font-extrabold text-2xl mb-10">
        Previously Searched Products :
      </div>
      <PaginationComponent />
    </div>
  );
};
export default App;
