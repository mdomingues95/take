import AppTableHeader from "components/AppTableHeader";
import { getAllVehicles } from "services/vehicleServices";
import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import AppTable from "components/AppTable";
import { PRIMARY_COLOR } from "config/CONSTANTS";
import { useNavigate } from "react-router-dom";
import { VEHICLES } from "navigation/CONSTANTS";

function Vehicles() {

  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const columns = [
    { id: 'image', label: 'Imagem', width: 100 },
    { id: 'description', label: 'Descrição' },
    { id: 'qlt', label: 'Quilometragem', format: value => (value / 1000).toFixed(3) + " km" },
    { id: 'price', label: 'Preço' }
  ];

  function createData(data) {
    return data.map((item) => {
      return (
        {
          code: item.vehicle_uuid,
          image: <img width="96" src={item.image} />,
          description:
            <div>
              <b>{item.brand_name + " - " + item.model_name}</b>
              <br/>{item.name}
              <br/>{item.manufacturing_year + "/" + item.model_year + " - " + item.fuel_type + " - " + item.transmission_type}
            </div>,
          qlt: item.mileage,
          price: <b style={{ color: PRIMARY_COLOR }}>{item.ad_selling_price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>
        }
      );
    });
  }

  function onAddClick() {
    navigate(VEHICLES + "/add");
  }
  function onItemClick(item) {
    navigate(VEHICLES + "/" + item.code, { state: { uid: item.code } });
  }

  useEffect(() => {
    getAllVehicles()
      .then((res) => {
        setVehicles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setVehicles([]);
        setIsLoading(false);
      });
    return () => { };
  }, []);

  return (
    <div className="full_height flex_col">
      <AppTableHeader title="Veículos" addClick={onAddClick} />
      {isLoading
        ? <LinearProgress sx={{ margin: '15px 0' }} color="primary" />
        : <AppTable columns={columns} rows={createData(vehicles)} itemClick={onItemClick} />}
    </div>
  );
}

export default Vehicles;
