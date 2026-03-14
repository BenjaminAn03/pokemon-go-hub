import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PokemonSectionTabs from './components/PokemonSectionTabs/PokemonSectionTabs';

function App() {
  const [search, setSearch] = useState("")
  const [pokemonProfile, setPokemonProfile] = useState(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = async (event: React.FormEvent) => {
    event?.preventDefault()

    try {
      const response = await axios.get(`http://localhost:8080/pokemon?name=${search}`)
      setPokemonProfile(response.data)
      setError(null)

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("Pokemon not found");
          setPokemonProfile(null);
        } else {
          setError("Server error");
        }
      } else {
        setError("Unexpected error");
      }
    }
  }

  return (
    <div className="flex min-h-screen min-w-[100vw] flex-col bg-black">
      <Header
        search={search}
        onChange={handleChange}
        onSearch={handleSearch}
        className=""
      />
      <main className="flex w-full flex-col items-center bg-gray-400">
        <PokemonSectionTabs />
        {pokemonProfile && (
          <pre className="text-left">
            {JSON.stringify(pokemonProfile, null, 2)}
          </pre>
        )}

        {error && <p className="text-red-500">{error}</p>}

      </main>
    </div>
  )
}

export default App
