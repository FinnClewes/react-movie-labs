import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToWatchlistIcon = ({ movie }) => {
    const { addToMustWatch } = useContext(MoviesContext);

    const handleAddToWatchlist = (e) => {
        e.preventDefault();
        addToMustWatch(movie);
    }

    return (
        <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
            <PlaylistAddIcon color="primary" fontSize="large" />
        </IconButton>
    )
}

export default AddToWatchlistIcon;