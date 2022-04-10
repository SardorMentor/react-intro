import React from "react";

import Header from "./components/Header/Header";
import NewProducts from "./components/ProductsList/NewProducts/NewProducts";
import TopProducts from "./components/ProductsList/TopProducts/TopProducts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <NewProducts />
        <TopProducts />
      </main>
    </>
  );
};

export default App;
