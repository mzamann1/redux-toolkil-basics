import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "./store";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {

    //this reset action creator will reset the state of slice which are listening to it.
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
