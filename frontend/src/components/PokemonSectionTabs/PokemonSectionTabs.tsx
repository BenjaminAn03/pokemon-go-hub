import { useState } from "react";
import Tab from "./Tab";

interface PokemonSectionTabsProps {
  className?: string;
}

const PokemonSectionTabs = ({ className }: PokemonSectionTabsProps) => {
  type PokemonTab = "stats" | "counters" | "cpiv" | "pvp" | "moves";
  const [activeTab, setActiveTab] = useState<PokemonTab>("stats");

  return (
    <div className={`bg-SectionTabBackgroundColor flex w-full justify-center ${className}`}>
      <div className="flex w-full max-w-7xl gap-2 px-3.5 py-5">
        <Tab
          title="Stats"
          src="/004_Charmander.png"
          alt="Charmander Artwork"
          active={activeTab === "stats"}
          onClick={() => setActiveTab("stats")}
        />
        <Tab
          title="Counters"
          src="/raid_icon.png"
          alt="Counters Artwork"
          active={activeTab === "counters"}
          isIcon
          onClick={() => setActiveTab("counters")}
        />
        <Tab
          title="CP & IV"
          src="/Binocular_icon.webp"
          alt="Binoculars Artwork"
          active={activeTab === "cpiv"}
          isIcon
          onClick={() => setActiveTab("cpiv")}
        />
        <Tab
          title="PvP"
          src="/Battle_icon.webp"
          alt="PvP Artwork"
          active={activeTab === "pvp"}
          isIcon
          onClick={() => setActiveTab("pvp")}
        />
        <Tab
          title="Moves"
          src="/Pokeball_icon.png"
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