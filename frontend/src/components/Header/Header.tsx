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
    <div className={`flex w-full justify-center bg-goHubGreen ${className}`}>
      <div className="flex w-full max-w-7xl gap-5 p-3">
        <div className="flex items-center justify-center">
          <Logo className="h-10 w-auto" />
        </div>
        <div className="flex-1">
          <SearchBar
            value={search}
            placeholder="Search..."
            className="flex h-12 w-full items-center rounded-xl p-3"
            onChange={onChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default Header;