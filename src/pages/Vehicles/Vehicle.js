
import { Box, LinearProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllVehicles, getVehicle } from "services/vehicleServices";
import Grid from '@mui/material/Unstable_Grid2';
import PaperForm from "components/PaperForm";
import PageHeader from "components/PageHeader";
import { VEHICLES } from "navigation/CONSTANTS";

function Vehicle() {

  const { state } = useLocation();
  const [vehicle, setVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (state != null) {
      getVehicle(state.uid)
        .then((res) => {
          setVehicle(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  });

  return (
    <div>
      {isLoading
        ? <LinearProgress sx={{ margin: '15px 0' }} color="primary" />
        :
        <div>
          <PageHeader backRoute={VEHICLES} title={(vehicle == null ? 'Adicionar' : 'Editar') + " veículo"} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 0, sm: 0, md: 2 }}>

              <Grid xs={12} sm={12} md={6} order={{ xs: 2, sm: 2, md: 1 }}>
                <PaperForm sx={{ marginBottom: '15px' }} title="Informações">
                </PaperForm>
              </Grid>
              <Grid xs={12} sm={12} md={6} order={{ xs: 1, sm: 1, md: 2 }}>
                <PaperForm sx={{ marginBottom: '15px' }} title="Notas de inspeção">
                  <Box className="flex_col align_center jutify_center" sx={{ padding: '15px' }}>
                    <img src={require('assets/veiculo.jpg')} />
                  </Box>
                </PaperForm>
                <PaperForm sx={{ marginBottom: '15px' }} title="Fotos do veículo">
                </PaperForm>
                <PaperForm sx={{ marginBottom: '15px' }} title="Contatos vinculados">
                </PaperForm>
              </Grid>

            </Grid>
          </Box>
        </div>}
    </div>
  );
}

export default Vehicle;
