import React from "react";
import axios from "axios";
import {
  Paper,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell
} from "@mui/material";
import Articulo from "./Articulo.jsx";

class Mostrar extends React.Component {
    state = {
        datos: []
    };

    componentDidMount() {
        axios.get("http://localhost:8080/api/mostrar")
            .then((response) => this.setState({
                ...this.state,
                datos: response.data
            }));
    }

    render() {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Medicamento</TableCell>
                <TableCell>Padecimiento</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Minuto</TableCell>
                <TableCell>Imagen</TableCell>
              </TableRow>
            </TableHead>
          </Table>

          <TableBody>
            {
              this.state.datos === null ?
              <CircularProgress /> :
              this.state.datos
                .map(function (articulo) {
                  return <Articulo datos={articulo} />;
                })
            }
          </TableBody>
        </TableContainer>
      );
    }
};

export default Mostrar;
