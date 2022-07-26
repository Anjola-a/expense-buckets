import { render } from "react-dom";
// import SpendingTotal from "./SpendingTotal";
import Spending from "./Budget";
import SetBalance from "./SetBalance";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    // replace <SearchParams /> and <h1>Adopt Me!</h1>
    <BrowserRouter>
      <h1>Bucket Budgeting</h1>
      <Routes>
        <Route path="/budget/:spend" element={<Spending />} />
        {/* i want spending info */}
        <Route path="/" element={<SetBalance />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
