import React from "react";
import Search from "./Search";

function Navbar({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>NoteApps</h1>
      <Search onSearch={onSearch} />
    </div>
  );
}

export default Navbar;
