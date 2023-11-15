import React, { Component } from "react";
import Navbar from "./Navbar";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppBody from "./NoteAppBody";

class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({ notes: updatedNotes });
  }

  onAddNoteHandler({ title, body, archived }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: showFormattedDate(new Date()),
      archived,
    };

    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  onSearchHandler(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="note-app">
        <Navbar onSearch={this.onSearchHandler} />
        <NoteAppBody addNote={this.onAddNoteHandler} />
        <NoteList
          notes={filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
