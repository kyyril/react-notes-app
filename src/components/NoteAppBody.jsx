import React from "react";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const updatedTitle = event.target.value.slice(0, this.state.maxTitleLength);
    this.setState({
      title: updatedTitle,
    });
  }

  onBodyChangeEventHandler(event) {
    const updatedBody = event.target.value;
    this.setState({
      body: updatedBody,
    });
  }

  calculateRemainingChars() {
    const { title, maxTitleLength } = this.state;
    const remainingChars = maxTitleLength - title.length;
    return remainingChars >= 0 ? remainingChars : 0;
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title.trim() === "") {
      alert("Judul tidak boleh kosong!");
      return;
    }

    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
      archived: false,
    });

    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const remainingChars = this.calculateRemainingChars();

    return (
      <div className="note-app__body">
        <form onSubmit={this.onSubmitEventHandler}>
          <div className="note-input">
            <h2>Buat catatan</h2>
            <p className="note-input__title__char-limit">
              Sisa karakter: {remainingChars}
            </p>
            <input
              type="text"
              placeholder="judul.."
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="isi catatan.."
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
            <button type="submit">Buat catatan</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteAppBody;
