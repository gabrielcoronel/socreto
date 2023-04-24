import React from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  IconButton,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function eliminar(id) {
    axios.post("http://localhost:8080/api/eliminar", { id })
      .then(function() {
        alert("Eliminado");
      });
};

class Mostrar extends React.Component {
    state = {
        datos: null
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
          <Table>
            <TableHead sx={{ display: "table-header-group" }} >
              <TableRow>
                <TableCell>Medicamento</TableCell>
                <TableCell>Padecimiento</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Minuto</TableCell>
                <TableCell>Imagen</TableCell>
                <TableCell>Eliminar</TableCell>
              </TableRow>
            </TableHead>
          </Table>

          <TableBody>
            {
              this.state.datos === null ?
              <CircularProgress /> :
              this.state.datos
                .map((articulo) => {
                  return (
                    <TableRow hover>
                      <TableCell><Typography>{articulo.medicamento}</Typography></TableCell>

                      <TableCell><Typography>{articulo.padecimiento}</Typography></TableCell>

                      <TableCell><Typography>{articulo.hora}</Typography></TableCell>

                      <TableCell><Typography>{articulo.minutos}</Typography></TableCell>

                      <TableCell><img src={articulo.foto} style={{ width: "5rem", height: "5rem" }} /></TableCell>

                      <TableCell><IconButton onClick={() => eliminar(this.props.datos._id)}><Delete /></IconButton></TableCell>
                    </TableRow>
                  );
                })
            }
          </TableBody>
        </TableContainer>
      );
    }
};

export default Mostrar;
