import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton.1";
import ArchiveButton from "./ArchiveButton";

function NoteItem({ title, body, createdAt, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      </div>
    </div>
  );
}

export default NoteItem;
