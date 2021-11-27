import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Product from "./pages/product";
import ManageProduct from "./pages/manage_product";
import Transaction from "./pages/transaction";
import Category from "./pages/category";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  const routes = [
    {
      path: "/dashboard",
      Component: Dashboard,
    },
    {
      path: "/product",
      Component: Product,
    },
    {
      path: "/manage_product",
      Component: ManageProduct,
    },
    {
      path: "/category",
      Component: Category,
    },
    {
      path: "/transaction",
      Component: Transaction,
    },
  ];
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <Layout>
            <Routes>
              {routes &&
                routes.map((route, i) => {
                  const { path, Component } = route;
                  return <Route key={i} path={path} element={<Component />} />;
                })}
            </Routes>
          </Layout>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
