import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
//COMO SOLO DEVUELVO UN COMPONENTE SIMPLE SOLO SE RETORNA
const newClient = (tipo) => {
    
    return axios.create({
        baseURL: 'https://www.APICIU.somee.com/api',
        
        timeout: 5000,
        
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Controlls-Allow-Methods':'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Accept': 'application/json',
            'tipo': tipo
        }
    });
}

const ChipMarca = ({marca, onAddSuccess}) => {
    const [openModify, setOpenModify] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [nombre, setNombre] = useState(marca.NombreMarca);
    
    const modificarMarca = async () => {
        try{
            
            const client = newClient('modificacion');
           
            const response = await client.post('/Marca', {Id: marca.Id, NombreMarca:nombre});
            
            if(onAddSuccess){
                onAddSuccess();
                
            }
            setOpenModify(false);
            
          }catch(error){
            console.log(error.message);
          }
        
    
      }

      const eliminarMarca = async () => {
        try{
           
            const client = newClient('baja');
            const response = await client.post('/Marca', {Id: marca.Id});
            if(onAddSuccess){
                onAddSuccess();
                
            }
            setOpenDelete(false);
            
          }catch(error){
            console.log(error.message);
          }
        
    
      }

      
    return (
        <>
        <Chip
            key = {marca.Id}
            label={marca.NombreMarca}
            onClick={()=> setOpenModify(true)}
            onDelete={()=> setOpenDelete(true)}
            color="primary"
            variant="outlined"
            style={{margin:5, width:200}}
            size="small"
        />
        <Dialog open={openModify} onClose={() => setOpenModify(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modificar Marca</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Por favor modifique los datos de la marca.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Marca"
            type="text"
            value={nombre}
            onChange = {(event) => {
                setNombre(event.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModify(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={modificarMarca} color="primary">
            Modificar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Eliminar Marca</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Esta seguro que desea eliminar la marca?.
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={eliminarMarca} color="primary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
    )
    
} 
;

export default ChipMarca;