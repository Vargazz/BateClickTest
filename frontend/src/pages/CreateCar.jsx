import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const card = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '200px',
  marginLeft: '950px',
  marginBottom: '10px',
  paddingTop: '10px',
  paddingBottom: '20px',
  backgroundColor: 'rgb(0, 255, 115)',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '250px',
  height: '350px',
  justifyContent: 'space-around',
  flexDirection: 'column',
}

const input = {
  height: '25px',
  borderRadius: '10px'
}

const button = {
  height: '25px',
  width: '200px',
  borderRadius: '10px'
}

const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(0, 255, 115)',
}

const Car = () => {

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    marca: '',
    modelo: '',
    ano: '',
    cor: ''
  });

  const handleChange = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClick = async () => {
    await api.post('/api/create', {
      marca: inputs.marca,
      modelo: inputs.modelo,
      ano: inputs.ano,
      cor: inputs.cor
    })
    
    navigate('/')
  }


  return (
    <div>
      <div style={title}>
        <h1>Adicionar Carro</h1>
      </div>
      <div style={card}>
      <label>Marca</label>
      <input name="marca" onChange={ handleChange } value={inputs.marca} style={input} placeholder="Insira a Marca" />
      <label>Modelo</label>
      <input name="modelo" onChange={ handleChange } value={inputs.modelo} style={input} placeholder="Insira o Modelo" />
      <label>Ano</label>
      <input name="ano" onChange={ handleChange } value={inputs.ano} style={input} placeholder="Insira o Ano" />
      <label>Cor</label>
      <input name="cor" onChange={ handleChange } value={inputs.cor} style={input} placeholder="Insira a Cor" />
      <button type="button" onClick={ () => handleClick() } style={button}>Adicionar Carro</button>
      </div>
    </div>
  )
}

export default Car;