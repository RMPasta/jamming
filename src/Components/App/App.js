import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "Song for You ",
          artist: "The Pillows",
          album: "Moondust",
          id: 1,
        },
        { name: "Green", artist: "Cavetown", album: "Lemon Boy", id: 2 },
        {
          name: "Thumbsucker",
          artist: "Soul Glo",
          album: "Diaspora Problems",
          id: 3,
        },
      ],
      playlistName: "",
      playlistTracks: [
        {
          name: "Sleep Walk",
          artist: "Santo & Johnny",
          album: "Unknown",
          id: 222,
        },
        { name: "Pulling Teeth", artist: "Green Day", album: "Dookie", id: 69 },
        {
          name: "Stick Around",
          artist: "wonderglu",
          album: "All Wire / No Net",
          id: 111,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
