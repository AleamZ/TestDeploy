import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

interface InputSearchProps {
  type?: string;
  placeholder?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  type = "text",
  placeholder = "Search for products...",
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="input-search-container"> 
      <div className="input-search-search-icon">
        <IoSearch />
      </div>
      <div className="input-search-search-input">
        <input
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="input-search-input"
          aria-label="Search input"
        />
      </div>
      {inputValue && (
        <div className="input-search-clear-icon">
          <IoClose
            onClick={handleClear}
          />
        </div>
      )}
    </div>
  );
};

export default InputSearch;
