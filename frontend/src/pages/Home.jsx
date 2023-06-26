import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const card = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  justifyContent: 'space-around',
}

const inputMarca = {
  width: '200px',
  alignItems:'center',
  fontSize: '20px'
}

const inputModelo = {
  width: '200px',
  alignItems:'center',
  fontSize: '20px'
}

const inputAno = {
  width: '200px',
  alignItems:'center',
  fontSize: '20px'
}

const inputCor = {
  width: '200px',
  alignItems:'center',
  fontSize: '20px'
}

const header = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: 'rgb(0, 255, 115)',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  justifyContent: 'space-around',
}

const buttonVer = {
  width: '140px',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: 'rgb(95, 236, 159)'
}

const inputSearch = {
  width:'1000px',
  position: 'absolute',
  left: '600px',
  height: '20px',
  borderRadius: '5px'
}
const search = {
  width:'100px',
  position: 'absolute',
  left: '1510px',
  height: '24px',
  borderRadius:'5px',
  fontSize: '20px'
}

const select = {
  position: 'absolute', 
  left: '500px',
  width:'100px',
  height:'25px'
}

const Home = () => {

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [itemSearch, setItemSearch] = useState(false)

  useEffect(() => {
    api.get('/api/search')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  const getCarId = (id) => {
    localStorage.setItem('@getID', JSON.stringify(id))
    navigate('/car')
  }

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = () => {

    if(selectedOption === 'Marca') {
      const results = data.filter(item =>
        item.marca.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else if(selectedOption === 'Modelo') {
      const results = data.filter(item =>
        item.modelo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else if(selectedOption === 'Ano') {
      const results = data.filter(item =>
        item.ano.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else if(selectedOption === 'Cor') {
      const results = data.filter(item =>
        item.cor.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }

    setItemSearch(true);
  };

  return(
    <div>
      <div style={header}>
        <span style={inputMarca}>Marca</span>
        <span style={inputModelo}>Modelo</span>
        <span style={inputAno}>Ano</span>
        <span style={inputCor}>Cor</span>
        <button type="button" onClick={ () => navigate('/createCar') } style={buttonVer}>Adicionar Novo Carro</button>
      </div>
      <input style={inputSearch} onChange={(e) => setSearchTerm(e.target.value)} />
      <select id="select-option" value={selectedOption} onChange={handleSelect} style={select}>
        <option value="">Selecione...</option>
        <option value="Marca">Marca</option>
        <option value="Modelo">Modelo</option>
        <option value="Ano">Ano</option>
        <option value="Cor">Cor</option>
      </select>
      <button style={search} onClick={handleSearch}>Pesquisar</button>
      {
        itemSearch === true ? searchResults.map(({id, marca, modelo, ano, cor}, index) => (
          <div key={index} style={card}>
            <span style={inputMarca}>{marca}</span>
            <span style={inputModelo}>{modelo}</span>
            <span style={inputAno}>{ano}</span>
            <span style={inputCor}>{cor}</span>
            <button onClick={() => getCarId(id)} style={buttonVer}>Ver</button>
          </div>
          )) :

      data.map(({id, marca, modelo, ano, cor}, index) => (
        <div key={index} style={card}>
          <span style={inputMarca}>{marca}</span>
          <span style={inputModelo}>{modelo}</span>
          <span style={inputAno}>{ano}</span>
          <span style={inputCor}>{cor}</span>
          <button onClick={() => getCarId(id)} style={buttonVer}>Ver</button>
        </div>
      ))
    }
    </div>
  )
}

export default Home;