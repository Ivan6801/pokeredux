/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './actions';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { getPokemons } from './api';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      dispatch(setPokemons(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img width={300} src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList key={pokemons} pokemons={pokemons} />
    </div>
  );
}

export default App;