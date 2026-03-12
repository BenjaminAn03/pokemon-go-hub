import React from 'react'
import './App.css'

interface SearchBarProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
}

const SearchBar = ({ onChange, value, placeholder }: SearchBarProps) => {
    return (
        <input
            type="text"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="rounded border px-3 py-2"
        />
    );
};

export default SearchBar;