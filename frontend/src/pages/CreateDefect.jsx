import React, { useEffect, useState } from "react";
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
  justifyContent: 'space-evenly',
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

const Defect = () => {

  const navigate = useNavigate()

  const [id, setId] = useState()

  const [inputs, setInputs] = useState({
    defeito: '',
    id_carro: '',
  });

  const handleChange = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClick = async () => {
    await api.post('/api/defeito', {
      defeito: inputs.defeito,
      id_carro: id,
    })
    
    navigate('/car')
  }

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('@getID'))
    setId(id)
  }, [])

  return (
    <div>
      <div style={title}>
        <h1>Adicionar Defeito</h1>
      </div>
      <div style={card}>
      <label>Defeito</label>
      <input name="defeito" onChange={ handleChange } value={inputs.defeito} placeholder="Insira o Defeito" style={input}/>
      <button style={button} type="button" onClick={ () => handleClick() }>Adicionar Defeito</button>
      </div>
    </div>
  )
}

export default Defect;