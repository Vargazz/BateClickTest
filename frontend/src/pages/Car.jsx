import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const card = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
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
  fontSize: '20px'
}

const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(0, 255, 115)',
}

const button = {
  height: '25px',
  width: '200px',
  display:'flex',
  alignItems:'center',
  justifyContent: 'space-around',
  borderRadius: '10px'
}

const Car = () => {

  const [car, setCar] = useState({});
  const [id, setId] = useState();
  const [defeito, setDefeito] = useState([])
  
  const navigate = useNavigate()

  const loadCar = async (id) => {
    const apii = await api.get(`/api/search/${id}`)
    setCar(apii.data)
  }

  const loadDefect = async (id) => {
    const apii = await api.get(`/api/cars/${id}/defeitos`)
    setDefeito(apii.data)
  }

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('@getID'))
    loadCar(id)
    loadDefect(id)
    setId(id)
  }, [])

  const deleteCar = async (id) => {
    await api.delete(`/api/delete/${id}`)
    navigate('/')
  }

  const deleteDefeito = async (id) => {
    await api.delete(`/api/deleteDefeito/${id}`)
    window.location.reload(false)
  }

  return (
    <div>
      <div style={title}>
        <h1>Detalhes do Carro</h1>
      </div>
      <div style={card}>
        <span>Marca: {car?.marca}</span>
        <span>Modelo: {car?.modelo}</span>
        <span>Ano: {car?.ano}</span>
        <span>Cor: {car?.cor}</span>
      <div>
        <button type="button" onClick={ () => navigate('/update')} style={button}>Editar</button>
        <button type="button" onClick={ () => deleteCar(id) } style={button}>Excluir</button>
      </div>
      </div>
      <div style={card}>
        <h2>Defeitos</h2>
        <button onClick={ () => navigate('/defects') } style={button}>Adicionar Defeito</button>
        {
          defeito.map(({ defeito , id}, index) => (
            <div>
              <span key={index}>{defeito}</span>
              <button type="button" onClick={ () => deleteDefeito(id)}>Excluir</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Car;