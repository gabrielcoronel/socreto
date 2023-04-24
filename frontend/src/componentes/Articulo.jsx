import React from "react";
import axios from "axios";
import {
    Typography,
    Avatar,
    TableRow,
    TableCell,
    IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function eliminar(id) {
    axios.post("http://localhost:8080/api/eliminar", { id })
      .then(function() {
        alert("Eliminado");
      });
};

class Articulo extends React.Component {
    render() {
      return (
        <TableRow>
          <TableCell><Typography>{this.props.datos.medicamento}</Typography></TableCell>

          <TableCell><Typography>{this.props.datos.padecimiento}</Typography></TableCell>

          <TableCell><Typography>{this.props.datos.hora}</Typography></TableCell>

          <TableCell><Typography>{this.props.datos.minutos}</Typography></TableCell>

          <TableCell><Avatar>{this.props.datos.foto}</Avatar></TableCell>

          <TableCell><IconButton onClick={() => eliminar(this.props.datos._id)}><Delete /></IconButton></TableCell>
        </TableRow>
      );
    }
};

export default Articulo;
