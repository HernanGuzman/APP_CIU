import React, {useState, useEffect} from 'react';
import ButtonAddMarca from '../components/ButtonAddMarca';
import ChipMarca from '../components/ChipMarca';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../styles/myStyle.css'
import axios from 'axios';

const newClient = () => {
    return axios.create({
        baseURL: 'https://www.APICIU.somee.com/api',
        
        timeout: 5000,
        
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Controlls-Allow-Methods':'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers' : 'Content-Type',
            'Accept': 'application/json'
        }
    });
}




const Marca = () =>{
    const [marcas, setMarcas] = useState([]);
    const consultarAPI = async () =>{
      try{
        const client = newClient();
        const response = await client.get('/Marca');
        setMarcas(response.data);
      }catch(error){
        console.log(error.message);
      }
    }
    //CON EL CORCHETE VACIO EJECUTO SOLO UNA VEZ EL USEFFECT
    useEffect(()=>{
        consultarAPI();
    },[])

    return (
      <> 


      

      <Grid container justify="center" spacing={3}>
        
        <Grid item xs={6}>
          <Paper elevation={3} style={{padding:10}}>
          <Grid container justify="space-between" style={{textAlign:'left'}}>
          <Grid item xs={12}>
          <Grid container justify="space-between" style={{textAlign:'left',  marginBottom:10}}>
          <Grid item xs={8}>
              <h4>
                Marcas Disponibles
              </h4>

            </Grid>
            <Grid item xs={4}>
            <ButtonAddMarca onAddSuccess = {() => consultarAPI()}
            />

            </Grid>
          </Grid>
          </Grid>
            
            <Grid item xs={12}>
            {marcas.map((marca, index)=>{
                return (
                  <ChipMarca marca = {marca}  onAddSuccess = {() => consultarAPI()}/>
                );})}
              
            </Grid>
          </Grid>
          </Paper>

        </Grid>
        
      </Grid>

      
      


      </>
    
        

    );

    
}
    

export default Marca;
