import SearchBar from './SearchBar';
import { useState } from 'react';
import axios from 'axios';
import './App.css'

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
    <div className="flex min-h-screen min-w-[100vw] flex-col items-center justify-center bg-green-300">
      <main className="flex flex-col items-center justify-center gap-4 rounded bg-gray-400">
        <form onSubmit={handleSearch}>
          <SearchBar
            onChange={handleChange}
            value={search}
            placeholder='Search...'
          />
        </form>

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
