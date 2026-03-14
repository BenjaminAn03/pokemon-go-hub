interface PokemonArtworkProps {
  src: string;
  alt: string;
  className?: string;
}

const PokemonArtwork = ({ src, alt, className }: PokemonArtworkProps) => {
  return (
    <div className="flex h-64 w-full items-center justify-center">
      <img src={src} alt={alt} className={`max-h-full max-w-full object-contain ${className}`} />
    </div>
  )
}

export default PokemonArtwork;