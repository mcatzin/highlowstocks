import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import HighchartsStore from "./app/store/highcharts-store";

import MainLayout from "./app/MainLayout";

function App() {
  return (
    <Provider store={HighchartsStore}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
