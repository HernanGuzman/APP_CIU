import React, {useState}  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import '../styles/myStyle.css'


const newClient = () => {
    return axios.create({
        baseURL: 'https://www.APICIU.somee.com/api',
        
        timeout: 5000,
        
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Controlls-Allow-Methods':'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Accept': 'application/json',
            'tipo': 'alta'
        }
    });
}


export default function ButtonAddProvincia({onAddSuccess}) {
  const [open, setOpen] = React.useState(false);
  const [nombre, setNombre] = useState('');

  const agregarProvincia = async () => {
    try{
        const client = newClient();
        const response = await client.post('/Provincias', {Descripcion:nombre});
        if(onAddSuccess){
            onAddSuccess();
            handleClose();
        }
        
      }catch(error){
        console.log(error.message);
      }
    

  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      
      
      
      
          <Button  variant="contained" color="primary" onClick={handleClickOpen}>
        Nueva Provincia
      </Button>
          
        
      
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ingresar Nueva Provincia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor ingrese la nueva provincia.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Provincia"
            type="text"
            value={nombre}
            onChange = {(event) => {
                setNombre(event.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregarProvincia} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}