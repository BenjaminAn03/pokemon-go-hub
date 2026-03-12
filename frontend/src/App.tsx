import SearchBar from './SearchBar';
import { useState } from 'react';
import './App.css'

function App() {
  const [search, setSearch] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center bg-green-300">
      <main className="flex flex-col items-center justify-center gap-4 bg-gray-400">
        <SearchBar
          onChange={handleChange}
          value={search}
          placeholder='Search...'
        />

        <p>You typed: {search}</p>
      </main>
    </div>
  )
}

export default App
