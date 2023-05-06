import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import { ROOT, VEHICLES } from "navigation/CONSTANTS";
import Home from "pages/Home";
import Vehicles from "pages/Vehicles";
import Layout from "layout/Layout";

export const RouterConfig = () => {
  return (
    <div>
    <Routes>
        <Route path={ROOT} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={VEHICLES} element={<Vehicles />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
