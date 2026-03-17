import Panel from "../components/PanelLayout/Panel";
import PanelLayout from "../components/PanelLayout/PanelLayout";

const PokemonNotFoundPage = () => {
  return <>
    <PanelLayout>
      <Panel title="Pokémon not available yet!" types={["grass"]} />
    </PanelLayout>
  </>
}

export default PokemonNotFoundPage;