import React, {useState, useEffect} from 'react';
import ButtonAddProvincia from '../components/ButtonAddProvincia';
import ChipProvincia from '../components/ChipProvincia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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




const Provincia = () =>{
    const [provincias, setProv] = useState([]);
    const consultarAPI = async () =>{
      try{
        const client = newClient();
        const response = await client.get('/Provincias');
        setProv(response.data);
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
                Provincias Disponibles
              </h4>

            </Grid>
            <Grid item xs={4}>
            <ButtonAddProvincia onAddSuccess = {() => consultarAPI()}
            />

            </Grid>
          </Grid>
          </Grid>
            
            <Grid item xs={12}>
            {provincias.map((prov, index)=>{
                return (
                  <ChipProvincia prov = {prov}  onAddSuccess = {() => consultarAPI()}/>
                );})}
              
            </Grid>
          </Grid>
          </Paper>

        </Grid>
        
      </Grid>

      
      


      </>
    
        

    );

    
}
    

export default Provincia;
