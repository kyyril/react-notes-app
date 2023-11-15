import React from "react";

function Search({ onSearch }) {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search">
      <input className="input-search"
        type="text"
        placeholder="Cari catatan..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
