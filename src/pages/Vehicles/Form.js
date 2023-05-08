
import { Box, Button, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { TabPanel } from "components/TabPanel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useForm } from "react-hook-form";
import FormRadioGroup from "components/Form/FormRadioGroup";
import FormTextField from "components/Form/FormTextField";
import FormSelect from "components/Form/FormSelect";
import FormObjectComplete from "components/Form/FormObjectComplete";



export default function FormVehicle(props) {

  const [valueTab, setValueTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  const { control, handleSubmit, reset } = useForm({
    reValidateMode: "onBlur"
  });

  const handleOnSubmit = (evt) => {
    console.log(evt);
  };

  const typeOptions = [
    { value: 0, label: "0km" },
    { value: 1, label: "Semi-novo" },
  ]

  const fuelOptions = [
    { value: 'gasolina', label: "Gasolina" },
    { value: 'etanol', label: "Etanol" },
    { value: 'flex', label: "Etanol/Gasolina" },
  ]

  const transmissionOptions = [
    { value: "manual", label: "Manual" },
    { value: "automatico", label: "Automático" },
  ]

  const acessoriesOptions = [
    { value: 1, label: "Air bag" },
    { value: 2, label: "Alarme" },
    { value: 3, label: "Ar condicionado" },
    { value: 4, label: "Som" },
    { value: 5, label: "Trava elétrica" },
    { value: 6, label: "Vidro elétrico" }
  ]

  useEffect(() => {
    if (props.model != null) {
      reset(props.model);
    }

  }, []);

  return (
    <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={valueTab} onChange={handleChangeTab} aria-label="basic tabs example">
            <Tab label="Dados do veículo" {...a11yProps(0)} />
            <Tab label="Preço médio" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={valueTab} index={0}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <FormRadioGroup control={control} name="type" options={typeOptions} row={true} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="plate" label="Placa" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="reindeer" label="Renavam" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="brand_name" label="Marca" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="model_name" label="Modelo" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="bodywork" label="Carroceria" />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <FormTextField control={control} name="manufacturing_year" label="Ano fabricação" />
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <FormTextField control={control} name="model_year" label="Ano modelo" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField control={control} name="version_name" label="Versão" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormSelect control={control} name="fuel_type" label="Combustível" options={fuelOptions} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormSelect control={control} name="transmission_type" label="Câmbio" options={transmissionOptions} />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="mileage" label="Quilometragem" />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormTextField control={control} name="color" label="Cor" />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormObjectComplete control={control} name="acessories" label="Acessórios" options={acessoriesOptions} />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField control={control} name="ad_selling_price" label="Preço" />
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>

        </TabPanel>
      </Box>
      <Divider />
      <Box className="flex_row align_center jutify_end" sx={{ padding: '25px' }}>
        <Button
          type="submit"
          className="sm_button"
          variant="contained"
          color="primary"
        >Salvar</Button>
      </Box>
    </Box>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
