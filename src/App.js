import { render } from "react-dom";
import Dashboard from "./containers/Dashboard";
// import SpendingTotal from "./SpendingTotal";
// import Spending from "./componenets/Budget";
// import SetBalance from "./componenets/SetBalance";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
const App = () => {
  return (
    // <ThemeProvider>
    <div>
      <GlobalStyles />
      <Dashboard />
    </div>
    // </ThemeProvider>
    // replace <SearchParams /> and <h1>Adopt Me!</h1>
    // <BrowserRouter>
    //   <h1>Bucket Budgeting</h1>
    //   <Routes>
    // <Route path="/budget/:spend" element={<Spending />} /> *
    /* i want spending info */
    /* <Route path="/" element={<SetBalance />} /> */
    //     <Route path="/" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
