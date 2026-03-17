import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import PokemonPage from './pages/PokemonPage';
import HomePage from './pages/HomePage';
import Error404Page from './pages/Error404Page';

function App() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    if (!search.trim()) return
    navigate(`/pokemon/${search.trim().toLowerCase()}`)
    setSearch("")
  }

  return (
    <>
      <div className="bg-mainBeige flex min-h-screen min-w-[100vw] flex-col">
        <Header
          search={search}
          onChange={handleChange}
          onSearch={handleSearch}
        />

        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<PokemonPage />} />
            <Route path="*" element={<Error404Page />} />
          </Routes>
        </Main>
      </div >
    </>
  )
}

export default App
