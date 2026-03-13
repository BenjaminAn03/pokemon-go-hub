import SearchBar from "./SearchBar"
import Logo from "./Logo";

interface HeaderProps {
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.SubmitEvent) => void;
  className?: string;
}

const Header = ({ search, onChange, onSearch, className }: HeaderProps) => {
  return (
    <div className={className}>
      <Logo
        className="h-12 w-auto"
      />
      <SearchBar
        value={search}
        placeholder="Search..."
        className="flex h-12 w-full flex-row rounded p-3"
        onChange={onChange}
        onSearch={onSearch}
      />
    </div>
  )
}

export default Header;