import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <>
      <div className="active-notes">
        <h2>Catatan aktif</h2>
        {activeNotes.length > 0 ? (
          <div className="notes-list">
            {activeNotes.map((note) => (
              <NoteItem key={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
        )}
      </div>

      <div className="archived-notes">
        <h2>Arsip</h2>
        {archivedNotes.length > 0 ? (
          <div className="notes-list">
            {archivedNotes.map((note) => (
              <NoteItem key={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada arsip</p>
        )}
      </div>
    </>
  );
}

export default NoteList;
