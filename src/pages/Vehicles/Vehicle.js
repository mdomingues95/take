
import { Avatar, Box, Button, Divider, LinearProgress, ListItemAvatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getVehicle } from "services/vehicleServices";
import Grid from '@mui/material/Unstable_Grid2';
import PaperForm from "components/PaperForm";
import PageHeader from "components/PageHeader";
import { VEHICLES } from "navigation/CONSTANTS";
import FormVehicle from "./Form";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { stringAvatar } from "utils/avatar";


function Vehicle() {

  const { state } = useLocation();
  const [vehicle, setVehicle] = useState(null);
  const [images, setImages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (state != null) {
      getVehicle(state.uid)
        .then((res) => {
          setVehicle(res);
          setImages([{ img: res.image }])
          setContacts([ //contacts mocks for layout
            { name: "Alfa Bravo", email: "email@domainname.com", cel: "(16) 99999-9999" },
            { name: "Charlie Delta", email: "email@domainname.com", cel: "(16) 99999-9999" },
            { name: "Echo Foxtrot", email: "email@domainname.com", cel: "(16) 99999-9999" }
          ])
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      {isLoading
        ? <LinearProgress sx={{ margin: '15px 0' }} color="primary" />
        :
        <div>
          <PageHeader backRoute={VEHICLES} title={(vehicle == null ? 'Adicionar' : 'Editar') + " veículo"} />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 0, sm: 0, md: 2 }}>

              <Grid xs={12} sm={12} md={7} order={{ xs: 2, sm: 2, md: 1 }}>
                <PaperForm sx={{ marginBottom: '15px' }} title="Informações">
                  <FormVehicle model={vehicle} />
                </PaperForm>
              </Grid>
              <Grid xs={12} sm={12} md={5} order={{ xs: 1, sm: 1, md: 2 }}>
                <PaperForm sx={{ marginBottom: '15px' }} title="Notas de inspeção">
                  <Box className="flex_col align_center jutify_center" sx={{ padding: '15px' }}>
                    <img width="100%" src={require('assets/veiculo.jpg')} />
                  </Box>
                </PaperForm>
                <PaperForm sx={{ marginBottom: '15px' }} title="Fotos do veículo">
                  <Box sx={{ padding: '15px' }}>
                    <ImageList sx={{ width: '100%', height: 398 }} cols={4} rowHeight={98}>
                      <ImageListItem key={0}>
                        <img
                          src={require('assets/add.png')}
                          loading="lazy"
                        />
                      </ImageListItem>
                      {images.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                </PaperForm>
                <PaperForm sx={{ marginBottom: '15px' }} title="Contatos vinculados">

                  <Box sx={{ width: '100%', overflowX: 'scroll' }}>
                    <List component={Stack} direction="row">
                      {contacts.map((item) => (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar {...stringAvatar(item.name)} />
                          </ListItemAvatar>
                          <ListItemText primary={item.name} secondary={<span>{item.email}<br />{item.cel}</span>} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Divider />
                  <Box className="flex_row align_center jutify_end" sx={{ padding: '25px' }}>
                    <Button
                      className="sm_button"
                      variant="outlined"
                      sx={{ marginRight: '15px' }}
                      color="primary"
                    >Ver todos</Button>
                    <Button
                      className="sm_button"
                      variant="contained"
                      color="primary"
                    >Adicionar</Button>
                  </Box>

                </PaperForm>
              </Grid>

            </Grid>
          </Box>
        </div>}
    </div>
  );
}

export default Vehicle;
