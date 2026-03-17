import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Panel from "../components/PanelLayout/Panel";
import PanelLayout from "../components/PanelLayout/PanelLayout";
import PokemonArtwork from "../components/PokemonArtwork";
import PokemonSectionTabs from "../components/PokemonSectionTabs/PokemonSectionTabs";
import Section from "../components/Section";
import StatsChart from "../components/StatsChart";
import TypeChart from "../components/TypeChart/TypeChart";

import type { PokemonProfile } from "../interfaces/PokemonProfile";
import { getPokemonImage } from "../utils/getPokemonImage";
import PokemonNotFoundPage from "./PokemonNotFoundPage";

const PokemonPage = () => {
  const { name } = useParams<{ name: string }>()
  const [profile, setProfile] = useState<PokemonProfile | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pokemon?name=${name}`)
        setProfile(response.data)
        setError(false)
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setError(true)
          setProfile(null)
        } else {
          console.error(error)
        }
      }
    }

    if (name) fetchProfile()
  }, [name])

  if (error) {
    return <PokemonNotFoundPage />
  }

  if (!profile) return null

  return (
    <>
      {profile && (
        <>
          <PokemonSectionTabs pokemonName={profile.name} pokemonSrc={getPokemonImage(profile.id)} />
          <PanelLayout>
            <Panel title={profile.name} types={profile.types} >
              <PokemonArtwork id={profile.id} name={profile.name} types={profile.types} />
              <Section title={`${profile.name} Type Chart`}>
                <TypeChart pokemonName={profile.name} effectiveness={profile.typeEffectiveness} />
              </Section>
              <Section title={`${profile.name} Stats`}>
                <StatsChart stats={{ maxCp: profile.maxCp, ...profile.stats }} />
              </Section>
            </Panel>
            {/* <Panel title={`${profile.name} best moveset`} types={profile.types} >
                <pre className="w-full border">{JSON.stringify(profile, null, 2)}</pre>
              </Panel> */}
          </PanelLayout>
        </>
      )}
    </>

  )
}

export default PokemonPage;