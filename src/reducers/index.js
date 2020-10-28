import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'no diggity', duration: '3:05' },
        { title: 'bitter sweet', duration: '4:45' },
        { title: 'all star', duration: '3:55' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED ') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})