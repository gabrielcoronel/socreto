import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { Stack } from "@mui/joy";
import IniciarSesion from "./IniciarSesion";
import Registrarse from "./Registrarse";
import Guardar from "./Guardar";
import Mostrar from "./Mostrar";

class Principal extends React.Component {
    state = {
        indice: 0
    };

    actualizarIndice = (_, nuevoIndice) => {
      this.setState({
        ...this.state,
        indice: nuevoIndice
      });
    };

    render() {
        let paginas = [
            <Mostrar />,
            <Guardar />,
            <IniciarSesion />,
            <Registrarse />
        ];

        return (
            <Stack spacing={2}>
                <Tabs
                    value={this.state.indice}
                    onChange={this.actualizarIndice}
                    centered
                    variant="fullWidth"
                >
                    <Tab label="Tabla de medicamento" />
                    <Tab label="Nuevo medicamento" />
                    <Tab label="Inicia sesión" />
                    <Tab label="Registrate" />
                </Tabs>

                <Box sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10rem"
                }}>
                  {paginas[this.state.indice]}
                </Box>
            </Stack>
        );
    }
};

export default Principal;
