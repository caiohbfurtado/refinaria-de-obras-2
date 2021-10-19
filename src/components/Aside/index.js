import { useState } from 'react';
import { Title } from '../Title';
import * as S from './styles';

export function Aside() {
  const [category, setCategory] = useState('movies');
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      category,
      title,
    });
  }

  return (
    <S.Container>
      <Title title="pesquisar" />
      <p>O que deseja buscar?</p>

      <form onSubmit={handleSubmit}>
        <div className="radios">
          <input 
            type="radio" 
            name="type" 
            id="movies" 
            value='movies' 
            checked={category === 'movies'}
            onChange={(e) => setCategory(e.target.value)}
            />
          <label htmlFor="movies">Filmes</label>

          <input 
            type="radio" 
            name="type" 
            id="series" 
            value='series' 
            checked={category === 'series'}
            onChange={(e) => setCategory(e.target.value)}
            />
          <label htmlFor="series">Séries</label>
        </div>

        <input 
          type="text"
          placeholder="texto da busca (ex: back to the future)"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <button 
          type='submit' 
          disabled={!(!!title)}
        >
          PESQUISAR
        </button>
      </form>
    </S.Container>
  );
}
