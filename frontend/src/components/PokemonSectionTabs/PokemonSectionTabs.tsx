import { useState } from "react";
import Tab from "./Tab";

interface PokemonSectionTabsProps {
  pokemonName: string;
  pokemonSrc: string;
  className?: string;
}

const PokemonSectionTabs = ({ pokemonName, pokemonSrc, className }: PokemonSectionTabsProps) => {
  type PokemonTab = "stats" | "counters" | "cpiv" | "pvp" | "moves";
  const [activeTab, setActiveTab] = useState<PokemonTab>("stats");

  return (
    <div className={`flex w-full justify-center bg-SectionTabBackgroundColor ${className}`}>
      <div className="flex w-full max-w-7xl gap-2 overflow-auto px-3 py-5">
        <Tab
          title="Stats"
          src={pokemonSrc}
          alt={`Official ${pokemonName} Artwork`}
          active={activeTab === "stats"}
          onClick={() => setActiveTab("stats")}
        />
        <Tab
          title="Counters"
          src="./icons/Raid_icon.png"
          alt="Counters Artwork"
          active={activeTab === "counters"}
          isIcon
          onClick={() => setActiveTab("counters")}
        />
        <Tab
          title="CP & IV"
          src="./icons/Binocular_icon.webp"
          alt="Binoculars Artwork"
          active={activeTab === "cpiv"}
          isIcon
          onClick={() => setActiveTab("cpiv")}
        />
        <Tab
          title="PvP"
          src="./icons/Battle_icon.webp"
          alt="PvP Artwork"
          active={activeTab === "pvp"}
          isIcon
          onClick={() => setActiveTab("pvp")}
        />
        <Tab
          title="Moves"
          src="./icons/Pokeball_icon.png"
          alt="PokeBall Artwork"
          active={activeTab === "moves"}
          isIcon
          onClick={() => setActiveTab("moves")}
        />
      </div>
    </div>
  )
}

export default PokemonSectionTabs;