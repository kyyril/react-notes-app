import React from "react";

function ArchiveButton({ id, onArchive, archived }) {
  return (
    <button
      className={`note-item__archive-button ${archived ? "archived" : ""}`}
      onClick={() => onArchive(id)}
    >
      {archived ? "buka arsip" : "arsip"}
    </button>
  );
}

export default ArchiveButton;
