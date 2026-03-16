import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import PokemonSectionTabs from './components/PokemonSectionTabs/PokemonSectionTabs';
import Panel from './components/PanelLayout/Panel';
import PokemonArtwork from './components/PokemonArtwork';
import { getPokemonImage } from './utils/getPokemonImage';
import PanelLayout from './components/PanelLayout/PanelLayout';
import type { PokemonProfile } from './interfaces/PokemonProfile';
import Main from './components/Main/Main';
import TypeChart from './components/TypeChart/TypeChart';
import Section from './components/Section';
import StatsChart from './components/StatsChart';

function App() {
  const [search, setSearch] = useState("")
  const [pokemonProfile, setPokemonProfile] = useState<PokemonProfile | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = async (event: React.SubmitEvent) => {
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
      <Main>
        {pokemonProfile && (
          <>
            <PokemonSectionTabs pokemonName={pokemonProfile.name} pokemonSrc={getPokemonImage(pokemonProfile.id)} />
            <PanelLayout>
              <Panel title={pokemonProfile.name} types={pokemonProfile.types} >
                <PokemonArtwork id={pokemonProfile.id} name={pokemonProfile.name} types={pokemonProfile.types} />
                <Section title={`${pokemonProfile.name} Type Chart`}>
                  <TypeChart pokemonName={pokemonProfile.name} effectiveness={pokemonProfile.typeEffectiveness} />
                </Section>
                <Section title={`${pokemonProfile.name} Stats`}>
                  <StatsChart stats={{ maxCp: pokemonProfile.maxCp, ...pokemonProfile.stats }} />
                </Section>
              </Panel>
              {/* <Panel title={`${pokemonProfile.name} best moveset`} types={pokemonProfile.types} >
                <pre className="w-full border">{JSON.stringify(pokemonProfile, null, 2)}</pre>
              </Panel> */}
            </PanelLayout>
          </>
        )}

        {error && <p className="text-red-500">{error}</p>}

      </Main>
    </div >
  )
}

export default App
