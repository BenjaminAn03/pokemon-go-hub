interface SearchBarProps {
  value: string;
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.SubmitEvent) => void;
}

const SearchBar = ({ value, placeholder, className, onChange, onSearch, }: SearchBarProps) => {
  return (
    <>
      <form onSubmit={onSearch} className='w-full'>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default SearchBar;