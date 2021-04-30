import { combineReducers } from "redux";

/* REDUCERS                                                 */

const songsReducer = () => {
  return [
    {
      title: "Always",
      duration: "1:12",
    },
    {
      title: "Man Overboard",
      duration: "1:56",
    },
    {
      title: "After Midnight",
      duration: "1:02",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
