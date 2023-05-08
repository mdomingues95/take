import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "navigation/NotFound";
import { ROOT, VEHICLES } from "navigation/CONSTANTS";
import Home from "pages/Home";
import Vehicles from "pages/Vehicles";
import MiniDrawer from "layout/MiniDrawer";
import Vehicle from "pages/Vehicles/Vehicle";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<MiniDrawer />}>
          <Route index element={<Home />} />
          <Route path={VEHICLES} element={<Vehicles />} />
          <Route path={VEHICLES+"/add"} element={<Vehicle />} />
          <Route path={VEHICLES+"/:id"} element={<Vehicle />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
