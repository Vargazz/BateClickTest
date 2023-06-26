import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const Car = () => {

  const card = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '100px',
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

  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    marca: '',
    modelo: '',
    ano: '',
    cor: ''
  });

  const [id, setId] = useState()

  const handleChange = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('@getID'))
    console.log(id);
    setId(id)
  }, [])

  const handleClick = async (id) => {
    await api.put(`/api/update/${id}`, {
      marca: inputs.marca,
      modelo: inputs.modelo,
      ano: inputs.ano,
      cor: inputs.cor
    })
    
    navigate('/car')
  }


  return (
    <div>
      <div style={title}>
        <h1>Editar Carro</h1>
      </div>
      <div style={card}>
      <label>Marca</label>
      <input name="marca" style={input}  onChange={ handleChange } value={inputs.marca} placeholder="Insira a Marca" />
      <label>Modelo</label>
      <input name="modelo" style={input}  onChange={ handleChange } value={inputs.modelo} placeholder="Insira o Modelo" />
      <label>Ano</label>
      <input name="ano" style={input}  onChange={ handleChange } value={inputs.ano} placeholder="Insira o Ano" />
      <label>Cor</label>
      <input name="cor" style={input}  onChange={ handleChange } value={inputs.cor} placeholder="Insira a Cor" />
      <button type="button" style={button} onClick={ () => handleClick(id) }>Salvar edição</button>
      </div>
    </div>
  )
}

export default Car;